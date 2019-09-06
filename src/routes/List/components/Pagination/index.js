import React from 'react';
import { Button } from '../../../../components/index';

const Pagination = ({ page, pages, pagesRange, onChangePage }) => {
  const handleOnChangePage = nextPage => () => {
    onChangePage(nextPage);
  };

  return (
    <div className="pagination">
      <p className="pagination__pages">
        Page {page} of {pages}
      </p>
      <div className="pagination__actions">
        <Button primary onClick={handleOnChangePage(-1)} disabled={pagesRange[0]}>
          Prev
        </Button>
        <div className="pagination__separator" />
        <Button primary onClick={handleOnChangePage(1)} disabled={pagesRange[1]}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
