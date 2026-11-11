import raju from '../assets/raju.jpg';
import { useEffect,useState } from 'react';
import '../css/image_comp.css';
export default function Image_comp(){

    let [data,setdata]=useState('');
    useEffect(()=>{

        alert('component mounted');

        return ()=>{
            alert('component unmounted');
        }

    },[]);

    return (
        <div className='image_comp'>

            <img src={raju} alt="" />
            <input type="text" onChange={(event)=>setdata(event.target.value)} />

        </div>
    );
}