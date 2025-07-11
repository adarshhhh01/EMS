import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'
const AllTask = () => {
    const [userData] = useContext(AuthContext);

  return (

    <div className='Alltasks'>
         <div className='AllTask justify-between' id='5'>
                <h2 className=''>Employee name</h2>
                <h3> New Task</h3>
                <h5>Active Task</h5>
                <h3>Completed Task</h3>
                <h3>Failed Task</h3>
            </div>

        <div className='alltask'>
            {userData.map(function(elem, idx){
            return <div key={idx} className='AllTask justify-between' id='5'>
                <h2 className=''>{elem.firstName}</h2>
                <h3> {elem.taskStats.newTask}</h3>
                <h5>{elem.taskStats.active}</h5>
                <h3>{elem.taskStats.completed}</h3>
                <h3>{elem.taskStats.failed}</h3>
            </div>
        })}
        </div>
            
            
    </div>
  )
}

export default AllTask