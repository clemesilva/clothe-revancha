import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../components/utils/firebase";
import SignInForm from "../components/form-input/SignInForm";
import SignUpForm from "../components/form-input/SignUpForm";

function SignIn() {
  return (
    <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-6 justify-center items-center mt-10">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default SignIn;
