import React from 'react'
import Header from '../other/Header';
import CreateTask from '../other/CreateTask.jsx'
import AllTask from '../other/AllTask.jsx';
const AdminDashboard = (props) => {
  return (
    <div>

    <Header changeUser={props.changeUser}/>
    <CreateTask />
    <AllTask />
    </div>
    
  )
}

export default AdminDashboard