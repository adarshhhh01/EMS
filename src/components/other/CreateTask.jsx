import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [Title, setTaskTitle] = useState('');
  const [Description, setTaskDescription] = useState('');
  const [Date, settaskDate] = useState('');
  const [assignTo, setassignTo] = useState('');
  const [Category, setCategory] = useState('');
  const categories = ['Design', 'Development', 'Marketing', 'Research', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      Title,
      Description,
      Date,
      Category,
      active: false,
      newTask: true,
      failed: false,
      Completed: false
    };

    const updatedData = userData.map(elem => {
      if (assignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskStats: {
            ...elem.taskStats,
            newTask: elem.taskStats.newTask + 1
          }
        };
      }
      return elem;
    });

    setUserData(updatedData);
    console.log(updatedData);

    // Reset form
    setTaskTitle('');
    setCategory('');
    setTaskDescription('');
    settaskDate('');
    setassignTo('');
  };

  return (
    <div className="create-task-container justify-between">
      <form onSubmit={handleSubmit}>
        <h2>Create Task</h2>
        <div className="justify-between">
          <div className="form-group">
              <label htmlFor="assignTo">Assign To</label>
              <input
                type="text"
                id="assignTo"
                name="assignTo"
                placeholder="Team member name"
                value={assignTo}
                onChange={(e) => {
                  setassignTo(e.target.value);
                }}
                required
              />
            </div>
          <div className="Left wrap-context">
            <div className="form-group width-screen">
              <label htmlFor="title">Title</label>
              <input
                value={Title}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                type="text"
                id="title"
                name="title"
                placeholder="Make a UI design"
                required
              />
            </div>
            
             <div className="right">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Detailed description of task (Max 500 words)"
                value={Description}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
                maxLength={500}
                required
              />
              <small>{Description.length}/500 characters</small>
            </div>
          </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={Date}
                onChange={(e) => {
                  settaskDate(e.target.value);
                }}
                required
              />
            </div>

            

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={Category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

         
        </div>

        <button type="submit" className="submit-btn">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;