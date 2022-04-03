//For add item to cart
export const addCart = (product) => {
  return {
    type: 'ADD_CART',
    payload: product,
  };
};

//For  dekete item
export const delCart = (product) => {
  return {
    type: 'DELETE_CART',
    payload: product,
  };
};
