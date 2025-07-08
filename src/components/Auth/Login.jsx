import React, { useState } from "react";


const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    // console.log(
    //   "Form submitted",
    //   "Email is : ",
    //   email,
    //   "Password is : ",
    //   password
    // );
    // alert("Form submitted successfully!");
    setemail("");
    setpassword("");
  };

  return (
    
    <div className="Login">
      <div className="login-A flex h-screen w-screen items-center justify-center">
        
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="login-form flex flex-col gap-4 items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className="border-2 border-red-600 rounded-full px-4 py-2"
            id="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className="border-2 border-red-600 rounded-full px-4 py-2"
            id="password"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded-full"
          >
            
            <span>SUBMIT</span>
          </button>
        </form>
      </div>
    </div>
  );
};


export default Login;
