import React,{useState} from 'react';
import './App.css';
import Wall from './components/Wall/Wall'
import Roof from './components/Roof/Roof'
import Sun from './components/Sun/Sun'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
const [orders, preVentOrders] = useState(true)

  return (
   
  <>
      <Sun setPreventOrders={preVentOrders}/>
      <Roof/>
      <Wall prevOrders={orders}/>
     
    </>
      
   
  );
}

export default App;
