
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) { 
      const  userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);
  
const handleLogin = (email, password) => {
  if (email == 'admin@company.com' && password == '123') { 
    setUser('admin');
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
  } else if (userData) {
    const employee = userData.find((e) => email == e.email && e.password == password);
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: 'employee', data: employee })
      );
    }
  } else {
    alert("Please enter a valid credentials");
  }
}; // <--- Make sure this is present
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin'? <AdminDashboard changeUser ={setUser} />: (user == 'employee' ? <EmployeeDashboard  changeUser={setUser} data={LoggedInUserData}/> : null) }
    </>
  );
};

export default App;
