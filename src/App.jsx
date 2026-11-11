import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Employeecard from './components/Employeecard.jsx';
import './App.css';
import './css/button.css';
import Image_comp from './components/Image_comp.jsx';
import { useState } from 'react';
import Counter_comp from './components/Counter_comp.jsx';
function App() {
  let information=[
    {
      name:"Rocky",
      role:"Software Engineer",
      location:"Bangalore",
      Description:"A soctware engineer who write APIs and deal with databases and deploy applications"
    },
    {
      name:"Rani",
      role:"Data Engineer",
      location:"Hyderabad",
      Description:"A soctware engineer who write APIs and deal with databases and deploy applications"
    },
    {
      name:"Riya",
      role:"Devops Engineer",
      location:"Chennai",
      Description:"A soctware engineer who write APIs and deal with databases and deploy applications"
    },
    {
      name:"Raja",
      role:"AI Engineer",
      location:"Noida",
      Description:"A soctware engineer who write APIs and deal with databases and deploy applications"
    }
  ];
  let [show,setshow]=useState(true);

  let clicked=()=>{setshow(!show)};
  return (
    /*
    <div className='app'>
      <Header />
        <div className="employeeinfo">
          {

            information.map((i)=>{
              return <Employeecard name={i.name} role={i.role} location={i.location} description={i.Description} />
            })
         }

        </div>
      
      <Footer />
    </div>*/

    
    <div>
      <div className='button_comp'>
      <button onClick={clicked}>SHOW/HIDE</button>
      </div>
    {show ? < Image_comp />:< Counter_comp />}
    </div>
    
  );
}

export default App;
