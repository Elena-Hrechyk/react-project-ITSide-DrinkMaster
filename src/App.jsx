import { Route, Routes, useNavigate } from 'react-router-dom';
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
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinkPage/MyDrinkPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));

function App() {
  const dispatch = useDispatch();
  const isUpdatind = useSelector(selectIsUpdating);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'));
  }, [navigate]);

  return (
    <AppWrapper>
      <GlobalStyle />
      {isUpdatind ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute component={<HomePage />} redirectTo="/welcome" />
              }
            />
            <Route
              path="/welcome"
              element={<PublicRoute component={<StartPage />} redirectTo="/" />}
            />
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
              path="/drinks"
              element={
                <PrivateRoute
                  component={<DrinksPage />}
                  redirectTo="/welcome"
                />
              }
            />

            <Route
              path="/drinks/:drinkId"
              element={
                <PrivateRoute component={<DrinkPage />} redirectTo="/welcome" />
              }
            />
            <Route
              path="/addDrink"
              element={
                <PrivateRoute
                  component={<AddDrinkPage />}
                  redirectTo="/welcome"
                  redirect
                />
              }
            />

            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  component={<FavoritesPage />}
                  redirectTo="/welcome"
                  redirect
                />
              }
            />
            <Route
              path="/my"
              element={
                <PrivateRoute
                  component={<MyDrinksPage />}
                  redirectTo="/welcome"
                  redirect
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </AppWrapper>
  );
}
export default App;
