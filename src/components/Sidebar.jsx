import { Link } from "react-router-dom";
export default function Sidebar(){

    return (
        <div className="sidebar">

            <ul>
                <li><Link to="/view">View</Link></li>
                <li><Link to="/add">Add</Link></li>
                

            </ul>

        </div>
    );
}