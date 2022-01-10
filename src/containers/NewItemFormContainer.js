import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewItemForm from '../components/NewItemForm';
import { addItem } from '../store/items/actions';

/**
 * 1. mapDispatchToProps can be a function which takes in dispatch,
 * that further calls the action creator.
 * 2. I can also use bindActionCreators to bind action creators with
 * dispatch.
        * const mapDispatchToProps = (dispatch) =>
          bindActionCreators(
            {
              onSubmit: (name, price) => addItem(name, price)
            },
            dispatch
          );
  3. Since the above pattern is so common, by default action creators
  are by default bound to dispatch shown below. In this case mapDispatchToProps
  will be an object rather than a function. 
 */
const mapDispatchToProps = {
  onSubmit: (name, price) => addItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
