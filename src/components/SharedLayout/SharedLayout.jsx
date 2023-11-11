import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from '../Footer/Footer';
import { Loader } from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/authSelectors';

const SharedLayout = ({ theme, toggleTheme }) => {
  const IsLogin = useSelector(selectIsLogin);
  return (
    <>
      {IsLogin && <Header theme={theme} toggleTheme={toggleTheme} />}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      {IsLogin && <Footer />}
    </>
  );
};

export default SharedLayout;
