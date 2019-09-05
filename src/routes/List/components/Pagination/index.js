import React from "react";
import { Button } from "../../../../components/index";
import "./styles.css";

const Pagination = ({ page, pages, pagesRange, onChangePage }) => {
  const handleOnChangePage = nextPage => () => {
    onChangePage(nextPage);
  };

  return (
    <div className="pagination">
      <Button primary onClick={handleOnChangePage(-1)} disabled={pagesRange[0]}>
        Prev
      </Button>
      <p>
        Page {page} of {pages}
      </p>
      <Button primary onClick={handleOnChangePage(1)} disabled={pagesRange[1]}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
