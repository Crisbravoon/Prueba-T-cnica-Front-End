import React from 'react'
import ProductCards from './components/Cards/productCards'
import CartProduct from './components/Cart/CartProduct'
import { Box, Grid } from '@mui/material'

const Shopping = () => {
    return (
        <div className='container'>
            <Grid container spacing={4}>
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
                <Grid item xs={8} sm={8} md={8}>
                    <ProductCards />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <CartProduct />
                </Grid>
            </Grid>
        </div>
    )
}

export default Shopping