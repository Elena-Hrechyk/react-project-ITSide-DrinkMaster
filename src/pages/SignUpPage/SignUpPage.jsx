import { Link } from 'react-router-dom';
import { SignUpForm } from '../../components/SignUpPageComponents/SignUpform/SignUpForm';

const SignUpPage = () => {
  return (
    <section>
      <h2>Sign Up</h2>
      <SignUpForm />
      <Link to="/signin">Sign In</Link>
    </section>
  );
};

export default SignUpPage;
