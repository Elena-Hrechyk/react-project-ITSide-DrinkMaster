import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from '../Footer/Footer';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default SharedLayout;
