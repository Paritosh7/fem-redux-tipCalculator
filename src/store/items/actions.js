export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (name, price) => ({
  type: ADD_ITEM,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: REMOVE_ITEM,
  payload: {
    uuid
  }
});
