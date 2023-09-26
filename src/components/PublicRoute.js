// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import { selectIsLogin } from '../redux/auth/authSelectors';

// export const PublicRoute = ({
//   children,
//   restricted = false,
//   redirectTo = '/',
//   ...routeProps
// }) => {
//   const isLogin = useSelector(selectIsLogin);

//   const shouldRedirect = isLogin && restricted;

//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//     </Route>
//   );
// };
