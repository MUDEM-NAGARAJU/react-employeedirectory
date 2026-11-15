import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect,useRef} from 'react';
export default function Updatecomponent(){

    let {eno}=useParams();
    let id=useRef();
    let age=useRef();
    let empname=useRef();
    let bloodgroup=useRef();

    useEffect(()=>{
        let p_url='https://dummyjson.com/users/'+eno+'/'

        axios.get(p_url).then((resp)=>{

            console.log(resp);

            id.current.value=resp.data.id;
            age.current.value=resp.data.age;
            bloodgroup.current.value=resp.data.bloodGroup;
            empname.current.value=resp.data.firstName

        }).catch((err)=>{
            console.log(err);

        });
    },[]);

    let updatedata=()=>{

        let put_url="https://dummyjson.com/users/"+eno+'/'

        let info={
            "empname":empname.current.value,
            "id":id.current.value,
            "age":age.current.value,
            "bloodGroup":bloodgroup.current.value,
        }

        axios.put(put_url,info).then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        });

    }

    return (
        <div className='updatecomponentmain'>

            <label htmlFor="">
                Employee ID<input ref={id} type="text" />
            </label><br /><br />

            <label htmlFor="">
                Employee Name<input ref={empname} type="text" />
            </label><br /><br />

            <label htmlFor="">
                Employee Age<input ref={age} type="text" />
            </label><br /><br />

            <label htmlFor="">
                Employee Bloodgroup<input ref={bloodgroup} type="text" />
            </label><br /><br />

            <button onClick={updatedata}>UPDATE</button>
            
           
            
        </div>
    );


}