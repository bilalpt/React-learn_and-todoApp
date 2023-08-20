import './App.css';
import Header from './Header'
// import { useState } from 'react';
import Main from './components/Main';


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

  let Another=false;




  return (
    <div className="App">
      <Header/>
      <Condition one={0}/>

      {Another ? <h1>possitive</h1> : <h2>negative</h2>}

      <Main one={false}/>



    </div>
  );
}

export default App;
