import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utlis/LocalStorage';

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  employee: [],
  admin: null
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employee, setEmployee] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // Initialize employee data
    const employees = [
      { id: 1, name: 'John Doe', email: 'john@example.com', password: '123' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: '123' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', password: '123' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', password: '123' },
      { id: 5, name: 'Mike Wilson', email: 'mike@example.com', password: '123' }
    ];
    setEmployee(employees);

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
    }
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        user,
        setUser,
        employee,
        admin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;