import React from 'react'
import './style.scss'
import logo from "../../images/puzzle-black-store.png";



 
const MyCustomHeader = () => {
    return ( 
        <div className = "header">
            <div className="logo">
                 <img src={logo} alt="logo"/>
            </div>    
        </div>
     );
}
 
export default MyCustomHeader;