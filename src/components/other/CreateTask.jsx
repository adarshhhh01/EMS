import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { addTask, employee } = useContext(TaskContext);
  const categories = ['Design', 'Development', 'Marketing', 'Research', 'Other'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskTitle.trim()) {
      alert('Please enter a task title');
      return;
    }

    if (!taskDescription.trim()) {
      alert('Please enter a task description');
      return;
    }

    if (!taskDate) {
      alert('Please select a due date');
      return;
    }

    if (!selectedCategory) {
      alert('Please select a category');
      return;
    }

    if (!assignTo) {
      alert('Please assign the task to an employee');
      return;
    }

    try {
      const formattedDate = new Date(taskDate).toLocaleDateString();
      const newTask = {
        id: uuidv4(),
        title: taskTitle,
        description: taskDescription,
        date: formattedDate,
        categories: [selectedCategory],
        assignTo
      };

      await addTask(newTask);
      alert('Task created successfully!');

      // Reset form
      setTaskTitle('');
      setTaskDescription('');
      setTaskDate('');
      setAssignTo('');
      setSelectedCategory('');
    } catch (error) {
      alert(error.message || 'Failed to create task');
    }
  };

  return (
    <div className="create-task-container p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">Task Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">Due Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="assignTo" className="block text-sm font-medium mb-1">Assign To</label>
            <select
              id="assignTo"
              name="assignTo"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select an employee</option>
              {employee.map(emp => (
                <option key={emp.email} value={emp.email}>{emp.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            maxLength={500}
            required
            className="w-full p-2 border rounded h-32"
          />
          <small className="text-sm text-gray-500">{taskDescription.length}/500 characters</small>
        </div>

        <button 
          type="submit" 
          className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
