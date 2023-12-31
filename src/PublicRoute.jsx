import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from './redux/auth/authSelectors';

export const PublicRoute = ({ component: StartPage, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);

  return isLogin ? <Navigate to={redirectTo} /> : StartPage;
};
