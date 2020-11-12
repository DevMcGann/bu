import * as React from 'react';
import {MercadoPago} from './MercadoPago';
import {TodoPago} from './TodoPago';
//import { UserDetails_me } from "@saleor/sdk/lib/queries/gqlTypes/UserDetails";
import { useAuth } from "@saleor/sdk";
import './styles.scss';


export interface FormasDePagoProps {
    items: any
}
 
const FormasDePago: React.FC<FormasDePagoProps> = (items) => {
    console.log("ITEM EN FORMAS DE PAGO", items.items.props)

    //con esto le pasamos los datos para armar el preference de mp
    const {products} =  items.items.props
    const total = items.items.props.total.net.amount
    
   // buscar al usuario!
   const { user } = useAuth();

    return ( 
        <div className = "formasDePago">
            <MercadoPago usuario={user} productos={products} total={total} />
            <TodoPago />
        </div>
     );
}
 
export {FormasDePago};