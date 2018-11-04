import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Item from './Item';

@observer
class ItemList extends Component {
  static propTypes = {
    invoice: PropTypes.objectOf(PropTypes.any),
  };

  render() {
    const { invoice } = this.props;

    return (
      <div>
        <h1>{invoice.status}</h1>
        {!invoice.is_paid && (
          <button type="button" onClick={() => invoice.markPaid()}>
            Pay
          </button>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            invoice.itemList.add({
              name: this.nameInput.value,
              quantity: parseInt(this.quantityInput.value, 10),
              price: parseInt(this.priceInput.value, 10),
            });

            e.target.reset();
            this.nameInput.focus();
          }}
        >
          <label htmlFor="name">
            Name
            <input
              type="text"
              ref={(input) => {
                this.nameInput = input;
              }}
              id="name"
            />
          </label>
          <label htmlFor="quantity">
            Quantity
            <input
              type="number"
              ref={(input) => {
                this.quantityInput = input;
              }}
              id="quantity"
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="text"
              ref={(input) => {
                this.priceInput = input;
              }}
              id="price"
            />
          </label>
          <button type="submit">Add</button>
        </form>

        <h2>Total is ${invoice.itemList.total.toFixed(2)}</h2>

        <ul>
          {invoice.itemList.items.map((item, i) => (
            <Item item={item} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

export default observer(ItemList);
