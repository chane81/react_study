import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import UserList from './UserList';

const App = ({ invoice, userList }) => (
  <div>
    <ItemList invoice={invoice} />
    <hr />
    <UserList userList={userList} />
  </div>
);

App.propTypes = {
  invoice: PropTypes.objectOf(PropTypes.any),
  userList: PropTypes.objectOf(PropTypes.any),
};

export default App;
