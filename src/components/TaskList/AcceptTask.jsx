import React from 'react'

const AcceptTask = ({data}) => {
    return (
    <div className='taskL1 task h-full w-[300px] bg-yello-400 border rounded-lg shadow-lg p-4'>   
          <div className=' display-flex item-self-center justify-center'>
            <span id='Priority'> {data.categories}</span>
            <h4  > {data.date}</h4>
            <h2> {data.title}</h2>
            <p>{data.description}</p>
          </div>
          <div className=''>
            <button>Mark as Completed</button>
            <button>Mark as Failed</button>
          </div>
        </div>
  )
}

export default AcceptTask