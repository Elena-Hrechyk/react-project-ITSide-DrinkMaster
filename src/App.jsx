import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { currentUser } from './redux/auth/authOperations';
import { selectIsUpdating } from './redux/auth/authSelectors';
import { AppWrapper } from './App.styled';
import { GlobalStyle } from './components/GlobalStyled/global.styled';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Loader } from './components/Loader/Loader';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import StartPage from './pages/StartPage/StartPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinkPage/MyDrinkPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));

function App() {
  const dispatch = useDispatch();
  const isUpdatind = useSelector(selectIsUpdating);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <AppWrapper>
      <GlobalStyle />
      {isUpdatind ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/welcome"
            element={<PublicRoute component={<StartPage />} />}
          />
          <Route
            path="/signup"
            element={<PublicRoute component={<SignUpPage />} />}
          />
          <Route
            path="/signin"
            element={<PublicRoute component={<SignInPage />} />}
          />

          <Route
            path="/"
            element={<PrivateRoute component={<SharedLayout />} />}
          >
            <Route index element={<PrivateRoute component={<HomePage />} />} />

            <Route
              path="addDrink"
              element={<PrivateRoute component={<AddDrinkPage />} />}
            />

            <Route
              path="favorites"
              element={<PrivateRoute component={<FavoritesPage />} />}
            />
            <Route
              path="my"
              element={<PrivateRoute component={<MyDrinksPage />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </AppWrapper>
  );
}
export default App;
