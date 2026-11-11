import { useState } from 'react';
import '../css/button.css';
export default function Counter_comp(){

    let [cnt,setcnt]=useState(0);
    let process=(event)=>{
        
        if (event.target.innerText=='+'){
            setcnt(cnt+1);
        }
        else{
            setcnt(cnt-1);
        }

    };
    return (
        <div className="button_comp">

            <button onClick={process}>+</button>
            <p>{cnt}</p>
            <button onClick={process}>-</button>

        </div>
    );
}