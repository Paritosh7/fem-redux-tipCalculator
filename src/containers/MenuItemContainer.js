import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updateQuantity: (quantity) => {
      dispatch(updateQuantity(ownProps.uuid, quantity));
    },
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price))
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
