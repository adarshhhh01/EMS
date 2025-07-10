import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import TaskList from '../TaskList/TaskList';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';

const EmployeeDashboard = () => {
  const { user, setUser } = useContext(AuthContext);

  if (!user) {
    return null; // or redirect to login
  }

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    window.location.reload();
  };

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen m-30'>
      <Header />
      <TaskListNumber data={user.data} />
      <TaskList data={user.data} />
    </div>
  );
};

export default EmployeeDashboard;
