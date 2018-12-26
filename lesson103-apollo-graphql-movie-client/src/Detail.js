import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

const Detail = ({match: {params: {moveId}}}) => {
  console.log(moveId);
  return <div>Detail</div>;
}

export default Detail;