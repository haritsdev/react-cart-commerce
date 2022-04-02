import React, { useState, useEffect, useCallback } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import AllStarRating from './AllStarRating';
import Star from './Star';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setIsFilter(false);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, [componentMounted]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothings
          </button>

          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothings
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct('jewelery')}
          >
            Jewelry
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct('lectronics')}
          >
            Electronics
          </button>
          <button
            className="btn btn-outline-success me-2"
            onClick={() => setIsFilter(!isFilter)}
          >
            <img
              src="/assets/filter.png"
              alt="filter"
              style={{ width: '20px', height: '20px', color: 'green' }}
            />
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div className={'col-lg-3 col-md-4 col-sm-6 mb-4'} key={product.id}>
              <div className="card h-100  p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: 250, objectFit: 'contain' }}
                  height="250px"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    {product.title.substring(0, 15)}
                  </h5>

                  <div className="card-text lead fw-bold">${product.price}</div>
                  <div className="d-flex flex-direction-row justify-content-between">
                    <Star rating={parseFloat(product?.rating?.rate) * 20} />
                    <h6 className="card-text lead fw-bold">
                      ({product.rating.rate}/5)
                    </h6>
                  </div>

                  <NavLink
                    to={`/product/${product.id}`}
                    href="#"
                    className="btn btn-outline-primary"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const clickStars = () => {
    setCurrentRating(currentRating);
    console.log(currentRating, 'ris rate');
  };
  return (
    <div>
      <div
        className={isFilter ? 'my-5 py-5' : 'container my-5 py-5'}
        style={{ position: 'relative' }}
      >
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        {isFilter && (
          <div
            className="card"
            style={{
              width: '20%',
              position: 'absolute',
              marginTop: '150px',
              left: 0,
            }}
          >
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Filter By</h5>
              <div className="card-text">
                {/* <select class="form-select" aria-label="Default select example">
                  <option selected>All</option>
                  <option value="1">A to Z</option>
                  <option value="2">Z to A</option>
                  <option value="3">High Price to Lower Price</option>
                  <option value="3">Low Price to Higher Price</option>
                </select> */}
              </div>
              <h5 className="card-title">Stars {currentRating}</h5>
              <div className="card-text">
                <AllStarRating
                  onClick={clickStars}
                  setCurrentRating={setCurrentRating}
                />
              </div>

              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        )}
        <div
          className="row justify-content-center"
          style={{
            width: isFilter ? '80%' : '100%',
            float: isFilter ? 'right' : '',
          }}
        >
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
