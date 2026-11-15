import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Employeecard from './components/Employeecard.jsx';
import './App.css';
import './css/button.css';
import Sidebar from './components/Sidebar.jsx';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Postcomponent from './components/Postcomponent.jsx';
import Viewcomponent from './components/Viewcomponent.jsx';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {


  
  return (

    <div className='app'>
      <BrowserRouter>
      <Header />
      <Sidebar />
      
      <Routes>
        <Route path="/view" element={<Viewcomponent />} ></Route>
        <Route path='/add' element={<Postcomponent />}></Route>
      
      
      </Routes>
      
      <Footer />
      
      </BrowserRouter>
    </div>
    
  );

}

export default App;
