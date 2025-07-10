import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const { employee } = useContext(AuthContext);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Alltasks'>
      <div className='AllTask justify-between' id='5'>
        <h2>Employee Name</h2>
        <h3>New Task</h3>
        <h5>Active Task</h5>
        <h3>Completed Task</h3>
        <h3>Failed Task</h3>
      </div>

      <div className='alltask'>
        {employee.map((elem, idx) => (
          <div key={idx} className='AllTask justify-between' id='5'>
            <h2 className=''>{elem.firstName}</h2>
            <h3>{elem.taskStats?.newTask || 0}</h3>
            <h5>{elem.taskStats?.active || 0}</h5>
            <h3>{elem.taskStats?.completed || 0}</h3>
            <h3>{elem.taskStats?.failed || 0}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;