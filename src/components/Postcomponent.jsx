import '../css/Postcomponent.css';
import { useRef,useState } from 'react';
import axios from 'axios';
export default function Postcomponent(){
    let empname=useRef();
    let gender=useRef();
    let role=useRef();
    let location=useRef();
    let image=useRef();
    let [response,setresponse]=useState("");
    let senddata=()=>{

        let data={

            "empname":empname.current.value,
            "gender":gender.current.value,
            "role":role.current.value,
            "location":location.current.value,
            "image":image.current.files[0]

        }
        let post_url="https://dummyjson.com/users/add"
        axios.post(post_url,data,{
            "headers":{
                "Content-type":"multipart/form-data"
            }
        }).then((resp)=>{
            setresponse("User created successfully!")
            console.log(resp.status);
        }).catch((err)=>{
            setresponse("Error while creating the user!")
            console.log(err);
        });

    }

    return (
        <div className='postcomponentmain'>
        <div className="postcomponent">
            <div className="right">
                <label htmlFor="">
                Employee Name <input ref={empname} type="text" />
                </label>
                <label htmlFor="">
                Gender 
                <select name="" id="" ref={gender}>
                    <option value="Male">MALE</option>
                    <option value="Female">Female</option>
                </select>
                </label>
            </div>

            <div className="left">
                <label htmlFor="">
                 Role <input ref={role} type="text" />
                </label>
                <label htmlFor="">
                Location <input ref={location} type="text" />
                </label>

                <label htmlFor="">
                    image <input type="file" ref={image} name="" id="" />
                </label>
            </div>

        </div>
        <div className='btn'>
            <button onClick={senddata}>POST</button>
            {response==="User created successfully!" ? 
            <p style={{color:"green"}}>{response}</p>:
            <p style={{color:"red"}}>{response}</p>}
        </div>
        
        </div>
    );
}