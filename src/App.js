import './App.css';
import Header from './Header'
import { useState } from 'react';


function App() {

  const Clickboss=()=>{
    console.log('you clicked baxter')
  }
  const Doubleclick=(name)=>{
    console.log('you clicked me'+name)
  }

  const [color,setColor]=useState('green')

  const Change=()=>{
    setColor('red')
  }

  return (
    <div className="App">
      <Header/>

      <button onClick={Clickboss}>click here</button>
      <h1 onClick={()=> Doubleclick('baxter')}>onbdouble</h1>

      <h1>shirt color {color}</h1>
      <button onClick={Change}>change color</button>
      
    </div>
  );
}

export default App;
