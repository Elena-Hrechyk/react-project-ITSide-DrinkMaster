import { lazy } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { currentUser } from './redux/auth/authOperations';
import { selectIsUpdating } from './redux/auth/authSelectors';
import { AppWrapper } from './App.styled';
import { GlobalStyle } from './components/GlobalStyled/global.styled';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Loader } from './components/Loader/Loader';

const StartPage = lazy(() => import('./pages/StartPage/StartPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinkPage/MyDrinkPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

// const test = import.meta.env.VITE_API_TEST;

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
          <Route path="/" element={<SharedLayout />}>
            <Route path="/welcome" element={<StartPage />} />
            <Route
              path="/signup"
              element={
                <PublicRoute component={<SignUpPage />} redirectTo="/" />
              }
            />
            <Route
              path="/signin"
              element={
                <PublicRoute component={<SignInPage />} redirectTo="/" />
              }
            />
            <Route
              index
              element={
                <PrivateRoute component={<HomePage />} redirectTo="/welcome" />
              }
            />
            <Route
              path="/addDrink"
              element={
                <PrivateRoute
                  component={<AddDrinkPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  component={<FavoritesPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/my"
              element={
                <PrivateRoute
                  component={<MyDrinksPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />

            {/* <Route index element={<HomePage />} />
          <Route path="/addDrink" element={<AddDrinkPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/my" element={<MyDrinksPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      )}

      {/* {isUpdatind && (

      )} */}
    </AppWrapper>
  );
}
export default App;

// import StartPage from './pages/StartPage/StartPage';
// import SignUpPage from './pages/SignUpPage/SignUpPage';
// import SignInPage from './pages/SignInPage/SignInPage';
// import HomePage from './pages/HomePage/HomePage';
// import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
// import MyDrinksPage from './pages/MyDrinkPage/MyDrinkPage';
// import AddDrinkPage from './pages/AddDrinkPage/AddDrinkPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
