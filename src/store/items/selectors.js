import { createSelector } from 'reselect';

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subTotal, tipPercentage) => (subTotal * tipPercentage) / 100
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subTotal, tipAmount) => subTotal + tipAmount
);
