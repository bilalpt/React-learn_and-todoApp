import './App.css';
import Header from './Header'
// import { useState } from 'react';


function App() {

  const Condition=({one})=>{
    if(one<0){
      return <h1>nagative number</h1>
    }
    else if(one>0){
      return <h1>possitive number</h1>
    }
    else{
      return <h1>zero</h1>
    }
  }


  return (
    <div className="App">
      <Header/>
      <Condition one={0}/>



    </div>
  );
}

export default App;
