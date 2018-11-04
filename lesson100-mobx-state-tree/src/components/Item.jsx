import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const Item = ({ item }) => (
  <li>
    {item.name} : {item.quantity} * ${item.price.toFixed(2)} = $
    {item.total.toFixed(2)}
    <button type="button" onClick={item.decrement}>
      -
    </button>
    <button type="button" onClick={item.increment}>
      +
    </button>
    <button type="button" onClick={item.remove}>
      X
    </button>
  </li>
);

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any)
};

export default observer(Item);
