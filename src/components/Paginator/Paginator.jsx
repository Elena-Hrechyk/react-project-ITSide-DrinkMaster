import { Wrap, Button, Wraper, ButtonPageItem } from './Paginator.styled';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const Paginator = ({ totalPages, paginate, nextPage, currentPage }) => {
  const handlePageChange = (pageNumber) => {
    nextPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const getVisiblePageNumbers = () => {
    const halfPageNumbersToShow = Math.floor(paginate / 2);
    const currentPageIndex = pageNumbers.indexOf(currentPage);
    const start = Math.max(0, currentPageIndex - halfPageNumbersToShow);
    const end = Math.min(pageNumbers.length - 1, start + paginate - 1);

    return pageNumbers.slice(start, end + 1);
  };

  return (
    <Wrap>
      <Button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdArrowBackIosNew />
      </Button>
      <Wraper>
        {getVisiblePageNumbers().map((number) => (
          <li key={number}>
            <ButtonPageItem
              type="button"
              onClick={() => handlePageChange(number)}
              isSelected={number === currentPage}
            >
              {number}
            </ButtonPageItem>
          </li>
        ))}
      </Wraper>
      <Button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdArrowForwardIos />
      </Button>
    </Wrap>
  );
};

export default Paginator;
