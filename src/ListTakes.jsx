import React from 'react'
import './App.css'


const ListTakes = ({ task,index,removeTask }) => {
  return (
    <div className='list-tasks'>
      {task.title}
        <button onClick={()=>{removeTask(index)}} className='DeleteTask'>Delete</button>
    </div>
  )
}

export default ListTakes
