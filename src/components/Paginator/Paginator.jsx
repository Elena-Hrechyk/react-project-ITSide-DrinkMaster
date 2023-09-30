// import { useState } from "react";
import { Wrap, Button, Wraper, ButtonPageItem } from "./Paginator.styled";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
// import { useSelector } from 'react-redux';
// import {selectDrinks} from '../../redux/drinks/drinksSelectors'

const Paginator = ({drinksPerPage, totalItems, paginate, nextPage, prevPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / drinksPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <Wrap>
            <Button type="button" onClick={prevPage}>
                <MdArrowBackIosNew/>
            </Button>
            <Wraper>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <ButtonPageItem type="button" onClick={() => paginate(number)}>{number}</ButtonPageItem>
                    </li>
                ))}
            </Wraper>
            <Button type="button" onClick={nextPage}>
                <MdArrowForwardIos/>
            </Button>
        </Wrap>
    )
};

export default Paginator