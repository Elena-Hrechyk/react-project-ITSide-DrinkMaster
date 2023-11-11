import { useEffect, useState } from 'react';
import { Wrap, ButtonArrow, Wraper, ButtonPageItem } from './Paginator.styled';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { DarkTheme, LightTheme } from '../GlobalStyled/themes';

const Paginator = ({ totalPages, paginate, nextPage, currentPage, theme }) => {
  const [colorArrow, setCorolArrow] = useState(DarkTheme.paginatorArrowColor);
  const [focusBgc, setFocusBgc] = useState(DarkTheme.paginatorFocusBgc);

  const colorTextFocus = DarkTheme.colorText;
  
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

  useEffect(() => {
    theme === 'dark'
      ? setCorolArrow(DarkTheme.paginatorArrowColor)
      : setCorolArrow(LightTheme.paginatorArrowColor);
    theme === 'dark'
      ? setFocusBgc(DarkTheme.paginatorFocusBgc)
      : setFocusBgc(LightTheme.paginatorFocusBgc);
  }, [theme]);

  return (
    <Wrap>
      <ButtonArrow
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdArrowBackIosNew color={colorArrow} />
      </ButtonArrow>
      <Wraper>
        {getVisiblePageNumbers().map((number) => (
          <li key={number}>
            <ButtonPageItem
              type="button"
              onClick={() => handlePageChange(number)}
              isSelected={number === currentPage}
              focusColor={focusBgc}
              focusText={colorTextFocus}
            >
              {number}
            </ButtonPageItem>
          </li>
        ))}
      </Wraper>
      <ButtonArrow
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdArrowForwardIos color={colorArrow} />
      </ButtonArrow>
    </Wrap>
  );
};

export default Paginator;
