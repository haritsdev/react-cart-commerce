import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Star from './Star';
import { NavLink } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());

      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            height={400}
            width={400}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50 pt-3">
            {product.category}
          </h4>
          <h1 className="display-5 py-3">{product.title}</h1>
          <span className="lead fw-bolder d-flex ">
            Rating : ( {product.rating && product.rating.rate}/5) &nbsp;
            {/* <i className="fa fa-star" /> */}
            <Star rating={parseFloat(product.rating?.rate) * 20} />
          </span>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <button className="btn btn-outline-primary">Add to Cart</button>
          <NavLink to="/cart" className="btn btn-outline-success ms-2 px-3">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div className="container pt-5">
      <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
