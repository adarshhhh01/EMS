import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import TaskListNumber from "./TaskListNumber";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    window.location.reload();
  };

  return (
    <div>
      <div id="header" className="flex items-center justify-between p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">
          Hello 👋 <br />
          <span className="text-xl">{user?.role === "admin" ? "Admin" : user?.data?.firstName || "User"}</span>
        </h1>
        <button 
          onClick={logOutUser} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
