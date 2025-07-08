import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='taskL2  task h-full w-[300px] bg-yello-400 border rounded-lg shadow-lg p-4'>   
          <div className=' display-flex item-self-center justify-center'>
            <span id='Priority'> {data.categories} </span>
            <h4 > {data.date}</h4>
            <h2> {data.title}</h2>
            <p>{data.description}</p>
          </div>
          <div>
            <button className='m-2'> Accept task </button>
          </div>
        </div>
  )
}

export default NewTask