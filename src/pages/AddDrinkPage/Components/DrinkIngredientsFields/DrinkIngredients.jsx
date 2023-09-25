import { useState } from "react";
import styled from '@emotion/styled';
import DropDownMenu from "../DropDownList/DropDownMenu";

const DrinkIngredients = () => {
const [counter, setCounter] = useState(0);
    return (<DrinkIngredientsFields>
        <TitleContainer>
            <h3 style={{ marginBottom: '0px', marginTop: '0px' }}>
                Ingredients
            </h3>
            <CountBlock>
                <CountButton onClick={() => setCounter(counter - 1)}>
                    -
                </CountButton>
                <p>{counter}</p>
                <CountButton onClick={() => setCounter(counter + 1)}>
                    +
                </CountButton>
            </CountBlock>
        </TitleContainer>

        <IngridientsContainer>
            {/* (for (let i = 0; i < 5; i++) {
  console.log(i); // Вывести числа от 0 до 4
}) */}
            <Ingridient width="316px">
                <DropDownMenu
                    id="category"
                    name="category"
                    // onChange={formik.handleChange}
                    style={{
                        color: 'red',
                    }}
                    // category={handleCategoryChange}
                />
            </Ingridient>
            <Ingridient width="150px">
                <Input
                    placeholder='Portion'
                    marginBottom='0'
                />
            </Ingridient>
            <DeleteButton>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        d="M15.625 4.375L4.375 15.625"
                        stroke="#F3F3F3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15.625 15.625L4.375 4.375"
                        stroke="#F3F3F3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

            </DeleteButton>
           
        </IngridientsContainer>
    </DrinkIngredientsFields>)
}

export default DrinkIngredients;


const DrinkIngredientsFields = styled.button`
  color: white;
  background-color: transparent;
`
const DeleteButton = styled.button`
  background-color: transparent;
  border: transparent;
`
const CountBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 6.5rem;
  height: 2.5rem;
  border: 1px solid #f3f3f380;
  border-radius: 200px;

  background-color: transparent;
`;
const CountButton = styled.div`
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IngridientsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const Ingridient = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: 2.5rem;
`;
const Input = styled.input`
margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '18px')};
  background-color: transparent;
  border: transparent;
`;