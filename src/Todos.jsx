import React from 'react'
import { useState } from 'react';
import AddTask from './AddTask';
import ListTakes from './ListTakes';
import './App.css'



const Todos = () => {

    const [tasks,setTasks]=useState([

    ]);
    const addTask = (title)=>{
      const newtask = [...tasks,{title}]
      setTasks(newtask);
    }

    const removeTask = (index)=>{
      const newTask = [...tasks]
      newTask.splice(index,1);
      setTasks(newTask)
    }

  return (

    <>
    <AddTask addTask={addTask}/>
    {tasks.map((task,index)=>(
      <ListTakes task={task} removeTask={removeTask}index={index} key={index}/>
    ))}

    </>    
    
  );
}

export default Todos
