import React from 'react'
import { useState } from 'react';
// import Todos from './Todos';
import './App.css'





const AddTask = ({addTask}) => {

    const [ToDo,setToDo]=useState('');

    
  const addItem =()=>{
    addTask(ToDo);
    setToDo("");
  };

  return (
    
    <div className="app">

    <div className="mainHeading">
    <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input type="text" value={ToDo} onChange={(e)=>setToDo(e.target.value)} placeholder="🖊️ Add item..." />
      <i className="fas fa-plus"></i>
      <button onClick={addItem} style={{backgroundColor:'black',color:'white'}}>+</button>
    </div>
    </div>
      
    
  )
}

export default AddTask
