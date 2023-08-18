import './App.css';
import Header from './Header'
import { useState } from 'react';
import Properties from './Props';


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

  
  const [start,end]=useState(0)

  const Sum=()=>{
    end(start+1)
  }
  const dec=()=>{
    end(start-1)
  }


  return (
    <div className="App">
      <Header/>

      <button onClick={Clickboss}>click here</button>
      <h1 onClick={()=> Doubleclick('baxter')}>onbdouble</h1>

      <h1>shirt color {color}</h1>
      <button onClick={dec}>-</button>
      <button onClick={Change}>change color</button>
      <button onClick={Sum}>+</button>
      <h1>increment {start}</h1>

      <Properties name={'kerala'}/>
      <Properties name={'tamilnadu'}/>
      <Properties name={'karnadaka'}/>





      
    </div>
  );
}

export default App;
