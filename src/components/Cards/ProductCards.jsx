
import React from 'react';

import { Button, CardActions, Grid ,Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


import productos from '../../../data/productos.json'
;

const ProductCards = () => {
  return (
    <Grid container spacing={1}>
      {productos.products.map((product) => (
        <Grid item="true" xs={12} sm={6} md={6} lg={4} xl={4} key={product.name} >
          <Card sx={{ width: '100%'}} >
            <CardMedia
              component="img"
              height="200"
              image="/public/producto.jpg"
              alt="producto"
              sx={{ objectFit: 'contain', padding:0 }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{
                display: 'flex',
                justifyContent: 'center',
              }}>
                {product.name}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
              }}>
              <Typography variant="h6" color="text.secondary">
                {product.stock}
              </Typography>
              <Button className='mr-8' size="small">Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
};


export default ProductCards;