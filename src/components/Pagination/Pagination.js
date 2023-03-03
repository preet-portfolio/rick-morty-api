import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const pageCount = info ? Math.ceil(info.pages) : 0;

  return (
    <ReactPaginate
      classNamePage={pageNumber === 1 ? 0 : pageNumber - 1}
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={pageCount}
    />
  );
};

export default Pagination;
