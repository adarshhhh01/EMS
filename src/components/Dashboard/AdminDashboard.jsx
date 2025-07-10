import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Header />
      <div className="dashboard-content">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;