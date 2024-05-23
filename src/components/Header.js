import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between z-10 absolute px-2 py-2 md:px-5 md:py-4 w-full md:bg-gradient-to-b from-black">
      <img
        className="md:w-44 w-24"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2 justify-center items-center">
          <h3 className="font-bold md:text-white">Hi, {user.displayName}</h3>
          <button
            onClick={handleSignOut}
            className="ml-2 px-2 py-1 font-bold text-white bg-[#d9232e] rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
