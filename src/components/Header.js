import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {toggleGptSearchView} from  "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGpt = useSelector((store)=>store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = ()=>{
    dispatch(toggleGptSearchView());
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between z-10 absolute pl-2 py-2 md:px-5 md:py-4 w-full md:bg-gradient-to-b from-black">
      <img
        className="md:w-44 w-24"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2 justify-center items-center">
          <button onClick={handleGPTSearchClick} className="bg-purple-800 py-2 px-4 m-2 text-white font-semibold rounded-lg hover:bg-purple-500">{showGpt?"Home":"GPT Search"}</button>
          <h3 className="font-medium text-sm md:font-bold text-white">
            Hi, {user.displayName}
          </h3>
          <button
            onClick={handleSignOut}
            className="rounded-lg text-white hover:bg-red-500 bg-[#d9232e] text-sm ml-2 font-medium px-2 md:px-2 md:py-1  md:font-bold  "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
