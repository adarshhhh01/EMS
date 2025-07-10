import "./index.css";
import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import { TaskProvider } from "./context/TaskContext";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) { 
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@company.com" && password === "123") { 
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    if (authData && authData.employee) {
      const employee = authData.employee.find(
        (e) => e.email === email && e.password === password
      );
      
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
    }

    alert("Invalid credentials");
  };

  return (
    <AuthProvider>
      <TaskProvider>
        <div className="app min-h-screen bg-gray-100">
          {!user ? (
            <Login onLogin={handleLogin} />
          ) : user === "admin" ? (
            <AdminDashboard />
          ) : (
            <EmployeeDashboard />
          )}
        </div>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
