import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';

const App = ({ invoice }) => <ItemList invoice={invoice} />;

App.propTypes = {
  invoice: PropTypes.objectOf(PropTypes.any),
};

export default App;
