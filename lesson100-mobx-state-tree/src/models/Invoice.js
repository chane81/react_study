import { types } from 'mobx-state-tree';
import ItemList from './ItemList';

const Invoice = types
  .model('Invoice', {
    currency: types.string,
    is_paid: false,
    itemList: types.optional(ItemList, {
      items: []
    })
  })
  .views(self => ({
    get status() {
      return self.is_paid ? 'Paid' : 'Not Paid';
    }
  }))
  .actions(self => ({
    markPaid() {
      self.is_paid = true;
    },
    togglePaid() {
      self.is_paid = !self.is_paid;
    }
  }));

export default Invoice;
