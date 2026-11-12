import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Employeecard from './components/Employeecard.jsx';
import './App.css';
import './css/button.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {

  let [info,setinfo]=useState([]);
  useEffect(()=>{

    let get_url='https://dummyjson.com/users';

    axios.get(get_url).then((obj)=>{
      setinfo(obj.data.users)

    }).catch((err)=>{
      console.log(err);
    });


  },[]);
  return (

    <div className='app'>
      <Header />
        <div className="employeeinfo">
          {
            info.map((it)=>{
              
              return <Employeecard name={it.firstName} role={it.role} location={it.address.city} gender={it.gender} />
            })
          }
        </div>
      
      <Footer />
    </div>
    
  );
}

export default App;
