import React from 'react';
import DevTools from 'mobx-react-devtools';
import ItemList from './ItemList';
import UserList from './UserList';

const App = () => (
  <div>
    <ItemList />
    <hr />
    <UserList />
    {process.env.NODE_ENV === 'development' && <DevTools />}
  </div>
);

export default App;
