import React from 'react'
import ProductCards from './components/Cards/productCards'
import CartProduct from './components/Cart/CartProduct'
import { Box, Grid } from '@mui/material'
import './styles.css'

const Shopping = () => {
    return (
        <div className='container'>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <h1>Alternova Shop</h1>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <ProductCards />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <CartProduct />
                </Grid>
            </Grid>
        </div>
    )
}

export default Shopping