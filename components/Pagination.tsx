import ReactPaginate from 'react-paginate';

// @ts-ignore
const Pagination = ({
  pageCount,
  marginPagesDisplayed,
  onPageChange,
  current,
}: any) => {
  const onPageChangeInject = (value: any) => {
    window.scrollTo(0, 0);
    onPageChange(value);
  };
  return (
    <ReactPaginate
      forcePage={current}
      nextLabel=">"
      previousLabel="<"
      breakClassName="page-item"
      breakLabel={<a className="page-link pointer">...</a>}
      pageClassName="page-item"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link pointer"
      nextLinkClassName="page-link pointer"
      containerClassName="pagination justify-content-center"
      pageLinkClassName="page-link pointer"
      activeClassName="active"
      disabledClassName="disabled"
      pageCount={pageCount}
      pageRangeDisplayed={2}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={v => onPageChangeInject(v)}
    />
  );
};

export default Pagination;
