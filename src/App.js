import './App.css';
// import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React, { Suspense, lazy } from 'react';

const Homee = lazy (() =>import('./components/Home.js'))

function App() {
 
  
  return (
      <>
      <Suspense fallback ={<div>Loding......</div>}>
       <Homee />
      </Suspense>
      
      
      </>
    
  );
}

export default App;
