import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../components/utils/firebase";
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1> inicio de sesion</h1>;
      <button onClick={logGoogleUser}>
        {" "}
        SignIN with signInWithGooglePopup
      </button>
    </>
  );
}
export default SignIn;
