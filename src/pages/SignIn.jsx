import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../components/utils/firebase";
import SignUpForm from "../components/form-input/SignUpForm";
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <button onClick={logGoogleUser}>
        {" "}
        SignIN with signInWithGooglePopup
      </button>
      <SignUpForm />
    </>
  );
}
export default SignIn;
