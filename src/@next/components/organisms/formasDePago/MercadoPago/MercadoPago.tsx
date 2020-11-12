import React from "react";
import logo from "../../../../../images/mercadoPagoLogo.png";
import './styles.scss';

export interface IMercadoPago {
  usuario: any,
  productos:any,
  total:any
}
 
const MercadoPago: React.FC<IMercadoPago> = (props)=> {

  const {usuario, productos, total} = props

  console.log(usuario, productos, total)
  
    return ( 
        <div className="mp" onClick={()=> alert("mercadopago")}>
          <img src={logo} alt=""/>
        </div>
   
     );
}
 
export  {MercadoPago};