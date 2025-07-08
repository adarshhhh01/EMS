import React from 'react'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'


const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='tasklist h-[55%] w-full items-center justify-start gap-5 flex-nowrap bg-red-500  rounded-lg mt-10'>
        {data.tasks.map((elem, idx)=>{
          if(elem.active){
            return <AcceptTask key={idx} data= {elem}/> 
          }
          if(elem.newTask){
            return <NewTask key={idx} data= {elem}/> 
          }
          if(elem.completed){
            return <CompleteTask key={idx} data= {elem}/> 
          }
          if(elem.failed){
            return <FailedTask key={idx} data= {elem}/> 
          }
        })}
    </div>
  )
}
 
export default TaskList