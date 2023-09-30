import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/filters/filtersOperation';
import { getIngredients } from '../../redux/filters/filtersOperation';
import { getRequestedDrink } from '../../redux/drinks/drinksOperations';

import {
  selectCategories,
  selectIngredients,
} from '../../redux/filters/selectors';
import { toast } from 'react-toastify';
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
  // searchQuery: Yup.string().required('searchQuery is required!'),
  // categories: Yup.string().required('Please select a categories'),
  // ingredients: Yup.string().required('Please select a ingredients'),
  searchQuery: Yup.string(),
  categories: Yup.string(),
  ingredients: Yup.string(),
});

export const SearchDrinks = ({ page, limit }) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  const ingredients = useSelector(selectIngredients);

  const handleSubmit = (values) => {
    if (query.trim() === '') {
      toast('🦄 Type a name of picture.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    setQuery(values.searchQuery);
    setCategory(values.categories);
    setIngredient(values.ingredients);

    console.log(category);

    setQuery('');
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());

    dispatch(getRequestedDrink({ query, category, ingredient, page, limit }));
  }, [dispatch, query, category, ingredient, page, limit]);

  console.log(category);

  const handleSearchChange = (event) => setQuery(event.target.value);

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
                  // className={searchQuery ? "active" : ""}
                  placeholder="Enter the text"
                  // autoCorrect="off"
                  // autoComplete="name"
                  onChange={handleSearchChange}
                  // valid={touched.fullname && !errors.fullname}
                  // error={touched.fullname && errors.fullname}
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
                      value: ingredient.title,
                      label: ingredient.title,
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
