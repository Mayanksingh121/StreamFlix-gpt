import Header from "./Header";
import LOGIN_BG_IMAGE from "../utils/assets/background-image.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG_IMAGE} alt="bg" />
      </div>
      <form className="w-3/12 bg-black py-12 px-6 absolute my-12 md:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Enter you Name"
          className="p-2 my-4 w-full bg-[#333434]"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-[#333434]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full text-black bg-[#333434]"
        />
        <button className="my-6 py-2 bg-red-700 w-full text-xl font-medium rounded-lg">
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
