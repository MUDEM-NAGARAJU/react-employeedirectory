import Button_comp from './Button_comp.jsx';

export default function Employeecard(props){
    
    return (
        <div className="employeecard">

            <div className="content">

                <ul>

                    <li>Name : {props.name}</li>
                    <li>Role : {props.role}</li>
                    <li>Location : {props.location}</li>
                    <li>Description : {props.description}</li>
                
                </ul>


            
                <div className="buttons">

                    <Button_comp content="View Profile" info={props.name} />
                    <Button_comp content= "Contact" info={props.role} />
                
                </div>
            </div>
        
        </div>
    );
}