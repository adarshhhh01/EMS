// import React, { useState } from "react";
import TaskListNumber from "./TaskListNumber";
// import EmployeeDashboard from "../Dashboard/EmployeeDashboard";
// import { setLocalStorage } from "../../utlis/LocalStorage";

const Header = (props) => {
    // const[username, setUsername] = useState(' ')
    // if(!data){
    //   setUsername('Admin')

    // }else{
    //   setUsername(data.firstName)
    // }
    
  
  const logOutUser= ()=>
  {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // data.changeUser('')
    // window.location.reload()
  }
  const getUsername = () => {
    if (props.data ) {
      return props.data.firstName;
    }
    return 'Admin'; // Default fallback
  };
  return (
    <div>
      <div id="header" className=" flex items-start justify-between ">
        <h1 className="   ">
          Hello 👋 <br />
          <span className="text-xl">{getUsername()}</span>
        </h1>
        <button onClick={logOutUser} className="">
          {" "}
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
