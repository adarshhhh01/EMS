import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onLogin) {
      console.error("Login handler not provided");
      return;
    }
    onLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Login">
      <div className="login-A flex h-screen w-screen items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="login-form flex flex-col gap-4 items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-red-600 rounded-full px-4 py-2"
            id="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-red-600 rounded-full px-4 py-2"
            id="password"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
