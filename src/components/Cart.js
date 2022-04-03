import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart } from '../redux/action';

const Cart = () => {
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleButton = (state, type) => {
    if (type === 'plus') {
      dispatch(addCart(state));
    }

    if (type === 'minus') {
      dispatch(delCart(state));
      if (state.qty === 0) {
        return;
      }
    }
  };
  return (
    <div className="container">
      {products &&
        products.map((product) => (
          <>
            <div className="row mt-4">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height={200}
                  width={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} =
                  {product.price * product.qty}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {' '}
                  <button
                    className="btn btn-outline-primary me-4"
                    onClick={() => handleButton(product, 'minus')}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <div>{product.qty}</div>
                  <button
                    className="btn btn-outline-primary me-4"
                    onClick={() => handleButton(product, 'plus')}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Cart;
