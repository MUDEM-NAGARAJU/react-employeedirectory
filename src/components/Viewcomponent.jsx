import { useEffect,useState } from "react";
import axios from 'axios';
import Employeecard from "./Employeecard";
export default function Viewcomponent(){

    let [info,setinfo]=useState([]);
    useEffect(()=>{
    
        let get_url='https://dummyjson.com/users';
    
        axios.get(get_url).then((obj)=>{
          setinfo(obj.data.users)
          console.log(obj);
    
        }).catch((err)=>{
          console.log(err);
        });
    
    
    },[]);

    return (
        <div className="employeeinfo">
            {
                info.map((it)=>{
                      
                return <Employeecard id={it.id} name={it.firstName} role={it.role} location={it.address.city} gender={it.gender} images={it.image} key={it.id}/>
                })
            }
        </div>
    );

}