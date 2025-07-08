import React from 'react';
<link rel="stylesheet" href="index.css" />
import Tasklist from '../TaskList/TaskList';  
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen m-30 '>
      <Header changeUser={props.changeUser}  data={props.data}/> 
      <TaskListNumber data={props.data}/>
      <Tasklist data={props.data}/>
    </div>
  );
};

export default EmployeeDashboard;
