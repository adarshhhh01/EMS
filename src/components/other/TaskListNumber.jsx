import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskListNumber = () => {
  const { getTaskStats, employee } = useContext(TaskContext);
  const stats = employee.reduce((acc, emp) => {
    const empStats = getTaskStats(emp.email);
    return {
      new: acc.new + empStats.new,
      active: acc.active + empStats.active,
      completed: acc.completed + empStats.completed,
      failed: acc.failed + empStats.failed
    };
  }, { new: 0, active: 0, completed: 0, failed: 0 });

  // Handle loading and error states
  if (!stats) {
    return (
      <div className='ram flex mt-10 px-10 justify-between gap-5 text-center justify-top'>
        <div className='taskCount1 h-40 w-[45%] py-6 px-9 rounded-lg bg-color-blue'>
          <h2 className='text-xl font-semibold'>Loading...</h2>
          <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>
        <div className='taskCount2 h-40 w-[45%] border py-6 px-9 rounded-lg bg-color-blue'>
          <h2 className='text-xl font-semibold'>Loading...</h2>
          <h3 className='text-xl font-medium'>Completed Tasks</h3>
        </div>
        <div className='taskCount3 h-40 w-[45%] border py-6 px-9 rounded-lg bg-color-blue'>
          <h2 className='text-xl font-semibold'>Loading...</h2>
          <h3 className='text-xl font-medium'>Active Tasks</h3>
        </div>
        <div className='taskCount4 h-40 w-[45%] border py-6 px-9 rounded-lg bg-color-blue'>
          <h2 className='text-xl font-semibold'>Loading...</h2>
          <h3 className='text-xl font-medium'>Failed Tasks</h3>
        </div>
      </div>
    );
  }

  return (
    <div className='ram flex mt-10 px-10 justify-between gap-5 text-center justify-top'>
      <div className='taskCount1 h-40 w-[45%] py-6 px-9 rounded-lg bg-color-blue'>
        <h2 className='text-xl font-semibold'>{stats.new}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className='taskCount2 h-40 w-[45%] border py-6 px-9 rounded-lg bg-color-blue'>
        <h2 className='text-xl font-semibold'>{stats.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Tasks</h3>
      </div>
      <div className='taskCount3 h-40 w-[45%] border py-6 px-9 rounded-lg bg-color-blue'>
        <h2 className='text-xl font-semibold'>{stats.active}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>
      <div className='taskCount4 h-40 w-[45%] border py-6 px-9 rounded-lg bg-color-blue'>
        <h2 className='text-xl font-semibold'>{stats.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
