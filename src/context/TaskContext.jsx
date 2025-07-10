import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthProvider';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { employee } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (newTask) => {
    // Validate if employee exists
    const employeeExists = employee.some(emp => emp.email === newTask.assignTo);
    if (!employeeExists) {
      throw new Error('Employee not found');
    }

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTask = (taskId, updatedData) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, ...updatedData } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const getEmployeeTasks = (email) => {
    if (!email) return [];
    return tasks.filter(task => task.assignTo === email);
  };

  const getTaskStats = (email) => {
    if (!email) return { new: 0, active: 0, completed: 0, failed: 0 };
    
    const employeeTasks = getEmployeeTasks(email);
    return employeeTasks.reduce((stats, task) => {
      if (task.newTask) stats.new++;
      if (task.active) stats.active++;
      if (task.completed) stats.completed++;
      if (task.failed) stats.failed++;
      return stats;
    }, { new: 0, active: 0, completed: 0, failed: 0 });
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      updateTask,
      getEmployeeTasks,
      getTaskStats,
      employee
    }}>
      {children}
    </TaskContext.Provider>
  );
};
