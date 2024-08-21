

import React, { useContext } from 'react'
import { CartContext } from './CartContext.jsx'
import { Button } from '@mui/material';

const CreateOrder = () => {

    //Traemos los productos del carrito
    const { cartItems } = useContext(CartContext);

    //Evento para crear el JSON del los productos
    const handleCreateOrder = () => {

        const total = cartItems.reduce((sum, item) => sum + item.unit_price, 0);

        //Estructura del JSON
        const order = {
            product: cartItems.map(item => ({
                name: item.name,
                unit_price: item.unit_price,
                stock: item.stock || 1,
                type: item.type,
            })),
            total: total,
            date: new Date().toDateString()
        };

        //Generamos el JSON y descargamos el archivo
        const orderJSON = JSON.stringify(order, null, 2);

        const blob = new Blob([orderJSON], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'order.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };


    return (
        //Botón para crear el JSON con los productos del carrito , el cual utilizaremos en CartProduct.jsx
        <Button size="small" onClick={handleCreateOrder}>
            Crear Orden
        </Button>
    )
};

export default CreateOrder;