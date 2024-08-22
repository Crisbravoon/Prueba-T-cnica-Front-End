
import React, { useContext } from 'react'

import { Box, Button, CardActions, Grid, Typography } from '@mui/material';
import { CartContext } from '../Cart/CartContext.jsx';
import CreateOrder from './CreateOrder.jsx';

import '../../styles.css';


const CartProduct = () => {

    const { cartItems } = useContext(CartContext);

    //Calculamos el total del carrito.
    const total = cartItems.reduce((sum, item) => sum + item.unit_price, 0);

    return (
        <div className='cart-producto container'>
            <Grid className='container' >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <h1>Carrito 🛍️</h1>
                </Box>
            </Grid>
            <Grid>

                {/* Mapeamos los productos seleccionados */}
                {cartItems.map((item, index) => (

                    <CardActions key={index}>
                        <Typography variant="h6" color="text.secondary">
                            {item.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {item.quanity || 1}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {item.unit_price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {item.unit_price * (item.quantity || 1)}
                        </Typography>
                    </CardActions>
                ))}

                {/* Generamos la Orden en formato JSON */}
                <Grid>
                    <CardActions>
                        <Button size="small">Total Orden: {total}</Button>
                        <CreateOrder />
                    </CardActions>
                </Grid>
            </Grid>
        </div>
    );
}

export default CartProduct