import { Card } from '@twilio-paste/core';
import { useSelector } from 'react-redux';
import { MenuItemContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { Summary } from './Summary';

const Calculator = () => {
  const items = useSelector((state) => state.items);

  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemContainer items={items} />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
