import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSearchDrink } from '../../redux/drinks/drinksOperations';
import {
  getCategories,
  getIngredients,
} from '../../redux/filters/filtersOperation';

import {
  selectCategories,
  selectIngredients,
} from '../../redux/filters/selectors';
import Select from 'react-select';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { colourStyles } from './colourStyles';

import {
  FileInputWrapper,
  SearchDrinksForm,
  EditIconWrapper,
  SearchDrinksInput,
} from './SearchDrinks.styled';

const initialValues = {
  searchQuery: '',
  categories: '',
  ingredients: '',
};
const validationSchema = Yup.object().shape({
  searchQuery: Yup.string(),
  categories: Yup.string(),
  ingredients: Yup.string(),
});

export const SearchDrinks = ({ page, limit }) => {
  const [searchWord, setSearchWord] = useState(null);
  const [category, setCategory] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [currentSearchWord, setCurrentSearchWord] = useState('');
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    throttle(() => setSearchWord(values.searchQuery), 300);
    setCategory(values.categories);
    setIngredient(values.ingredients);
    setSearchWord('');
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    const dataQuery = { page, limit };

    if (category) {
      if (category !== currentCategory) dataQuery.page = 1;
      setCurrentCategory(category);
      dataQuery.category = category;
    }

    if (ingredient) {
      if (ingredient !== currentIngredient) dataQuery.page = 1;
      setCurrentIngredient(ingredient);
      dataQuery.ingredient = ingredient;
    }

    if (searchWord) {
      if (searchWord !== currentSearchWord) dataQuery.page = 1;
      setCurrentSearchWord(searchWord);
      dataQuery.searchWord = searchWord;
    }

    dispatch(getSearchDrink(dataQuery));
  }, [
    dispatch,
    searchWord,
    category,
    ingredient,
    page,
    limit,
    currentCategory,
    currentIngredient,
    currentSearchWord,
  ]);

  const handleSearchChange = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <SearchDrinksForm onSubmit={props.handleSubmit}>
          <div>
            <FileInputWrapper>
              <label htmlFor="searchQuery">
                <SearchDrinksInput
                  name="searchQuery"
                  type="text"
                  value={searchWord}
                  placeholder="Enter the text"
                  onChange={handleSearchChange}
                />
                <EditIconWrapper></EditIconWrapper>
              </label>
            </FileInputWrapper>
          </div>
          <div>
            <label htmlFor="categories">
              <Field name="categories">
                {({ field, form }) => (
                  <Select
                    styles={colourStyles}
                    closeMenuOnSelect={true}
                    isClearable={true}
                    classNames={{
                      control: (state) =>
                        state.isFocused
                          ? 'border-orange-600'
                          : 'border-grey-300',
                    }}
                    options={categories.map((category) => ({
                      value: category,
                      label: category,
                    }))}
                    name={field.name}
                    id="categories"
                    {...field}
                    value={category ? { value: category, label: category } : ''}
                    onChange={(selectedOption) => {
                      setCategory(selectedOption ? selectedOption.value : '');
                      form.setFieldValue(
                        'categories',
                        selectedOption ? selectedOption.value : '',
                      );
                    }}
                    handleGategory
                    placeholder="All categories"
                  />
                )}
              </Field>
            </label>
          </div>
          <div>
            <label htmlFor="ingredients">
              <Field name="ingredients">
                {({ field, form }) => (
                  <Select
                    styles={colourStyles}
                    closeMenuOnSelect={true}
                    isClearable={true}
                    classNames={{
                      control: (state) =>
                        state.isFocused
                          ? 'border-orange-600'
                          : 'border-grey-300',
                    }}
                    options={ingredients.map((ingredient) => ({
                      value: ingredient,
                      label: ingredient,
                    }))}
                    name={field.name}
                    id="ingredients"
                    {...field}
                    value={
                      ingredient ? { value: ingredient, label: ingredient } : ''
                    }
                    onChange={(selectedOption) => {
                      setIngredient(selectedOption ? selectedOption.value : '');
                      form.setFieldValue(
                        'ingredient',
                        selectedOption ? selectedOption.value : '',
                      );
                    }}
                    placeholder="Ingredients"
                  />
                )}
              </Field>
            </label>
          </div>
        </SearchDrinksForm>
      )}
    </Formik>
  );
};
