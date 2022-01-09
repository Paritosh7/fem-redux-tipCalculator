export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (name, price) => ({
  type: ADD_ITEM,
  payload: {
    name,
    price
  }
});
