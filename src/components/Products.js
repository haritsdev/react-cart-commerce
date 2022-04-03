import React, { useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import AllStarRating from './AllStarRating';
import MultiRangeSlider from './MultiRangeSlider';
import Star from './Star';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [selectFilter, setSelectFilter] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [currentValue, setCurrentValue] = useState(0);
  const [currentMaxValue, setCurrentMaxValue] = useState(0);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setIsFilter(false);

      // const getLowerPrice = sortPrice.filter((data) => data.price[0]);
      // const lengt = sortPrice[sortPrice.length - 1];
      // console.log(lengt, 'highest');

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
  }, [componentMounted, minVal]);

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
    // const updatedList = data.filter((x) => x.rating.rate >= 4);
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

  // console.log(lengt.price, 'lowest price');

  const getSelectedFilter = (e) => {
    e.preventDefault();
    setSelectFilter(e.target.value);

    if (parseInt(e.target.value) === 0) {
      setFilter(data);
    }
    if (parseInt(e.target.value) === 1) {
      filter.sort(function (a, b) {
        let titleA = a.title;
        let titleB = b.title;
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });
      setFilter(filter);
    }

    if (parseInt(e.target.value) === 2) {
      filter.sort(function (a, b) {
        let titleA = a.title;
        let titleB = b.title;
        if (titleA < titleB) return 1;
        if (titleA > titleB) return -1;
        return 0;
      });
      setFilter(filter);
    }

    if (parseInt(e.target.value) === 3) {
      filter.sort(function (a, b) {
        let titleA = a.price;
        let titleB = b.price;
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });
      setFilter(filter);
    }

    if (parseInt(e.target.value) === 4) {
      filter.sort(function (a, b) {
        let titleA = a.price;
        let titleB = b.price;
        if (titleA < titleB) return 1;
        if (titleA > titleB) return -1;
        return 0;
      });
      setFilter(filter);
    }
  };

  const options = [
    {
      label: 'All',
      value: 0,
    },
    {
      label: 'A to Z',
      value: 1,
    },
    {
      label: 'Z to A',
      value: 2,
    },
    {
      label: 'High Price to Lower Price',
      value: 3,
    },
    {
      label: 'Low Price to Higher Price',
      value: 4,
    },
  ];

  function changeMinMax(min, max) {
    setCurrentValue(min);
    setCurrentMaxValue(max);
    // const minVal = filter.sort(function (a, b) {
    //   let titleA = a.price;
    //   let titleB = b.price;
    //   if (titleA < titleB) return 1;
    //   if (titleA > titleB) return -1;
    //   return 0;
    // });

    const maxVal = filter.sort(function (a, b) {
      let titleA = a.price;
      let titleB = b.price;
      if (titleA < titleB) return 1;
      if (titleA > titleB) return -1;
      return 0;
    });

    const evens = data.filter((item) => item.price <= min);
    const evenMax = maxVal.filter((item) => item <= min);
    console.log(evens, 'ffgfgd');
    setFilter(maxVal);
  }
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
              <h5 className="card-title">Filter By {selectFilter}</h5>
              <div className="card-text">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={selectFilter}
                  onChange={(e) => getSelectedFilter(e)}
                >
                  {options.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <h5 className="card-title">Stars {currentRating}</h5>
              <div className="card-text">
                <AllStarRating
                  setCurrentRating={setCurrentRating}
                  setFilter={setFilter}
                  dataFilter={data}
                />
              </div>

              <div className="card-text">
                <MultiRangeSlider
                  min={minVal}
                  max={maxVal}
                  onChange={({ min, max }) => changeMinMax(min, max)}
                />
              </div>
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
