import './App.css';
import Header from './Header'
import { useState } from 'react';
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

  let Keydata=[{id:1,brand:'Dell',price:20000,qty:1},
              {id:2,brand:'Lenovo',price:30000,qty:1},
              {id:3,brand:'Dell',price:20000,qty:1}]


  const [products,setuser] = useState(Keydata);
  
  const Keyfun=(id)=>{
    const two=products.map((item)=>
    item.id===id?{...item, qty: item.qty+1}:item

    );
    setuser(two); 




  }


  return (
    <div className="App">
      <Header/>
      <Condition one={0}/>

      {Another ? <h1>possitive</h1> : <h2>negative</h2>}

      <Main one={false}/>
      {products.map((product)=>(
        <div style={{backgroundColor:'blue', marginLeft:'500px',marginRight:'500px'}}>
        <h1>{product.brand}</h1>
        <h2>{product.brand}</h2>
        <h3>{product.qty}</h3>

       <button onClick={()=>Keyfun(product.id)}>+</button>

        </div>




      ))}



    </div>
  );
}

export default App;
