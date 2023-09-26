import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';
// import { currentUser } from './redux/auth/authOperations';
// import { selectIsUpdating } from './redux/auth/authSelectors';
import { AppWrapper } from './App.styled';
import SharedLayout from './components/SharedLayout/SharedLayout';

const StartPage = lazy(() => import('./pages/StartPage/StartPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinkPage/MyDrinkPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const test = import.meta.env.VITE_API_TEST;

function App() {
  // const dispatch = useDispatch();
  // const isUpdatind = useSelector(selectIsUpdating);

  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [dispatch]);

  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/welcome" element={<StartPage />} />

          <Route path="/addDrink" element={<AddDrinkPage />} />

          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/my" element={<MyDrinksPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {/* {isUpdatind && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute component={HomePage} redirectTo="/login" />
              }
            />

            <Route path="/welcome" element={<StartPage />} />
            <Route
              path="/signup"
              element={<PublicRoute component={SignUpPage} redirectTo="/" />}
            />
            <Route
              path="/signin"
              element={<PublicRoute component={SignInPage} redirectTo="/" />}
            />
            <Route
              path="/addDrink"
              element={
                <PrivateRoute component={AddDrinkPage} redirectTo="/login" />
              }
            />

            <Route
              path="/favorites"
              element={
                <PrivateRoute component={FavoritesPage} redirectTo="/login" />
              }
            />
            <Route
              path="/my"
              element={
                <PrivateRoute component={MyDrinksPage} redirectTo="/login" />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )} */}
    </AppWrapper>
  );
}
export default App;
