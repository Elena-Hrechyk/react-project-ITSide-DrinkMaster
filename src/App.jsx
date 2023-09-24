import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { AppWrapper } from './App.styled';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import StartPage from './pages/StartPage/StartPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import MyDrinksPage from './pages/MyDrinkPage/MyDrinkPage'
import AddDrinkPage from './pages/AddDrinkPage/AddDrinkPage';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
     

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/addDrink" element={<AddDrinkPage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          {/* <Route path="/drinks" element={<DrinksPage />} /> */}
          <Route path="/my" element={<MyDrinksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
