import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin, selectIsUpdating } from './redux/auth/authSelectors';

export const PrivateRoute = ({ component: SomePage, redirectTo = '/welcome' }) => {
  const isLogin = useSelector(selectIsLogin);
  const isUpdating = useSelector(selectIsUpdating);
  const shoudRedirect = !isLogin && !isUpdating;

  return shoudRedirect ? <Navigate to={redirectTo} /> : SomePage;
};
