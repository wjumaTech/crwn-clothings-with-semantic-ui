import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.util";

export const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div className="ui segment">

      <div> Login works! </div>
      <br />

      <button
        onClick={ logGoogleUser } 
        className="ui button blue"
      >
        Sign in with Google
      </button>

    </div>
  );

};