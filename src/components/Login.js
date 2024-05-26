import Header from "./Header";
import LOGIN_BG_IMAGE from "../utils/assets/background-image.jpg";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const emailID = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    //validate form data
    const message = checkValidData(
      emailID.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message) return;

    //sign in or signup logic

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailID.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //updating the user data in the redux store to update the display name
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        emailID.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="bg-black h-full">
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG_IMAGE} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[80%] md:w-4/12  bg-black py-12 px-6 absolute my-20 md:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-100 md:bg-opacity-80 "
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter you Name"
            className="p-2 my-4 w-full bg-[#333434]"
          />
        )}
        <input
          ref={emailID}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-[#333434]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-[#333434]"
        />

        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="hover:bg-red-500 my-6 py-2 bg-red-700 w-full text-xl font-medium rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignInForm ? "New to StreamFlix? " : "Already a user? "}
          <span onClick={toggleSignInForm} className="cursor-pointer">
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
