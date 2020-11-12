import React from "react";
import logo from "../../../../../images/todopago.png";
import './styles.scss';


 
const TodoPago: React.FC = ()=> {
    return ( 
        <div className="tp" onClick={()=> alert("TodoPago")}>
          <img src={logo} alt=""/>
        </div>
   
     );
}
 
export  {TodoPago};