
import React, { useState, useContext } from 'react';

import { Button, CardActions, Grid, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import productosData from '../../data/productos.json';
import { CartContext } from '../Cart/CartContext.jsx';

const ProductCards = () => {

  const [productos, setProductos] = useState(productosData);

  const { addToCart } = useContext(CartContext);

  const handleClick = (product) => {

    if (product.stock > 0) {
      // Disminuimos el stock y actualizamos los productos.
      product.stock -= 1
      setProductos({ ...productos });

      // Agregamos el producto al carrito.
      addToCart(product);
    }
  };

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      {productos.products.map((product) => (
        <Grid item="true" xs={12} sm={6} md={6} lg={4} xl={4} key={product.name} >
          <Card variant="outlined">
            <CardMedia
              component="img"
              height="200"
              image="/public/img/producto.jpg"
              alt="producto"
              sx={{ objectFit: 'contain' }}
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
              }}>
              <Grid xs={12} sm={6} md={6} lg={4} xl={4}>
                <Typography variant="h6"
                  size="small"
                  color="text.secondary">
                  Stock: {product.stock}
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={4} xl={4}>
                <Button
                  variant='contained'
                  className='mr-8'
                  size="small"
                  onClick={() => handleClick(product)}
                  disabled={product.stock === 0}
                >
                  Agregar a Carrito
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
};

export default ProductCards;