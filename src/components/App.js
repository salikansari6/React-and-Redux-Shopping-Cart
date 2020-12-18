import './App.css';
import Navbar from './Navbar';
import Products from './Products';
import React,{useState} from 'react';
import {BrowserRouter as Router, Switch , Link,Route} from 'react-router-dom'
import Cart from './Cart';


function App() {




  return (
    <div className="App">
      <Router>
      <Navbar ></Navbar>
      <Route path='/' exact component={Products} ></Route>
      <Route path='/cart' exact component={Cart}></Route>
      </Router>
    </div>
  );
}

export default App;
