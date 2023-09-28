import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.util";

export const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
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