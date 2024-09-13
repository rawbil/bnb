import SignupForm from '../../ui/signup/signupForm';
import AuthLayout from '../layout';

const SignupPage = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm />
    </div>
  );
};

// Custom layout for the signup page
SignupPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default SignupPage;
