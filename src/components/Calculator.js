import { Card } from '@twilio-paste/core';
import { useSelector } from 'react-redux';
import { MenuItemContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { SummaryContainer } from '../containers/SummaryContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

const Calculator = () => {
  const items = useSelector((state) => state.items);

  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemContainer items={items} />
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
