import React from 'react';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
import PropTypes from 'prop-types';

const ListPage = ({ match }) => {
  const { page = 1, tag } = match.params;

  return (
    <PageTemplate>
      <ListWrapper>
        <ListContainer page={parseInt(page, 10)} tag={tag} />
      </ListWrapper>
    </PageTemplate>
  );
};

// Prop Types
ListPage.propTypes = {
  match: PropTypes.object
};

export default ListPage;
