import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../util/useUserContext";

const Nav = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(false);
    navigate("/");
  };

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="flex gap-4">
        {user && (
          <>
            <NavLink
              to="/dashboard"
              className="hover:text-indigo-200 transition duration-200 font-semibold"
            >
              Dashboard
            </NavLink>
          </>
        )}
      </div>

      {user && (
        <button
          onClick={handleLogout}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Nav;
