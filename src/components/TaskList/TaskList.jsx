import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import AcceptTask from './AcceptTask';
import FailedTask from './FailedTask';

const TaskList = () => {
  const { tasks, getEmployeeTasks } = useContext(TaskContext);
  const { user } = useContext(AuthContext);
  
  // Get all tasks for admin, employee-specific tasks for employees
  const displayTasks = user?.role === 'admin' ? tasks : getEmployeeTasks();

  return (
    <div id='tasklist' className='tasklist h-[55%] w-full items-center justify-start gap-5 flex-nowrap bg-red-500 rounded-lg mt-10'>
      {displayTasks.map((task, idx) => {
        return (
          <div key={idx}>
            {task.active ? (
              <AcceptTask data={task} />
            ) : task.newTask ? (
              <NewTask data={task} />
            ) : task.completed ? (
              <CompleteTask data={task} />
            ) : task.failed ? (
              <FailedTask data={task} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;