import React from 'react';
import axios from 'axios';

const test1 = async () => {
  const result = await axios.get('/api/5000/posts');
  console.log(JSON.stringify(result.data));
};

const test2 = async () => {
  const result = await axios.get('/api/4000/posts?page=1');
  console.log(JSON.stringify(result.data));
};

const test3 = async () => {
  const result = await axios.get('/todos/1');
  console.log(JSON.stringify(result.data));
};

const App = () => {
  
  test1();
  test2();
  test3();

  return (
    <div>
      test
    </div>
  );
};

export default App;
