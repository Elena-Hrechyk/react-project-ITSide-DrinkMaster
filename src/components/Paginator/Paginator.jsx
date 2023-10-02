// import { useState } from "react";
import { Wrap, Button, Wraper, ButtonPageItem } from './Paginator.styled';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
// import { useSelector } from 'react-redux';
// import {selectDrinks} from '../../redux/drinks/drinksSelectors'

const Paginator = ({
  drinksPerPage,
  totalItems,
  paginate,
  nextPage,
  currentPage,
}) => {
  const handlePageChange = (pageNumber) => {

    nextPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / drinksPerPage); i++) {
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
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </ButtonPageItem>
          </li>
        ))}
      </Wraper>
      <Button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalItems / drinksPerPage)}
      >
        <MdArrowForwardIos />
      </Button>
    </Wrap>
  );
};

export default Paginator;
