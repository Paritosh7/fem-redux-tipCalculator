import { ADD_ITEM, REMOVE_ITEM } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, { uuid: id++, quantity: 1, ...action.payload }];

    case REMOVE_ITEM:
      return state.filter(({ uuid }) => uuid !== action.payload.uuid);

    default:
      return state;
  }
};

export default reducer;
