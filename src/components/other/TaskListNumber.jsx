import React from 'react';
<link rel="stylesheet" href="index.css" />


const TaskListNumber = ({data}) => {
  return (

    <div className='ram flex mt-10 px-10 justify-between gap-5 text-center justify-top '>
      <div  className='taskCount1  h-40 w-[45%]  py-6 px-9 rounded-lg bg-color-blue'>
        <h2 className='text-xl font-semibold '>{data.taskStats.newTask}</h2> 
        <h3 className='texl-xl font-medium '>New Task</h3>
      </div>

      <div  className='taskCount2 m- h-40 w-[45%] border py-6 px-9 rounded-lg bg-color-blue'>
        <h2 className='text-xl font-semibold '>{data.taskStats.completed}</h2>
        <h3 className='texl-xl font-medium '>Completed task</h3>
      </div>

      <div className=' taskCount3 h-40 w-[45%] border py-6 px-9 rounded-lg bg-color-blue'>
        <h2 className='text-xl font-semibold '>{data.taskStats.active}</h2>
        <h3 className='texl-xl font-medium '>Accepting Task</h3>
      </div>
      
      <div  className='taskCount4  h-40 w-[45%] border py-6 px-9 rounded-lg bg-color-blue'>
        <h2 className='text-xl font-semibold '>{data.taskStats.failed}</h2>
        <h3 className='texl-xl font-medium '>Failed Task</h3>
      </div>
      
    </div>
  );
};

export default TaskListNumber;
