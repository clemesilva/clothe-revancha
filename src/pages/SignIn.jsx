import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../components/utils/firebase.jsx";
import SignInForm from "../components/form-input/SignInForm.jsx";
import SignUpForm from "../components/form-input/SignUpForm.jsx";

const Authenticaction = () => {
  return (
    <div className="flex flex-nowrap">
      <SignInForm />
      <SignUpForm />;
    </div>
  );
};

export default Authenticaction;
