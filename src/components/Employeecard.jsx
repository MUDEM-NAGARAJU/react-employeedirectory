import Button_comp from './Button_comp.jsx';

import {useNavigate} from "react-router-dom";
export default function Employeecard(props){
    let navigate=useNavigate();
    let updateemployee=(eno)=>{

        navigate('/update/'+eno);

    }
    
    return (
        <div className="employeecard">

            <div className="content">

                <ul>
                    <li>Name : {props.name}</li>
                    <li>Role : {props.role}</li>
                    <li>Location : {props.location}</li>
                    <li>Gender : {props.gender}</li>
                    {props.images ? <img src={props.images} alt="" />:''}
                    
                
                </ul>
            
                <div className="buttons">

                   <button onClick={()=>{updateemployee(props.id)}}>UPDATE</button>
                
                </div>
            </div>
        
        </div>
    );
}