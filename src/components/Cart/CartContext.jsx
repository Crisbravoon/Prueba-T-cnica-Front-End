
import React, { createContext, useState } from 'react';

//Permite que cualquier componente pueda obtener los datos.
export const CartContext = createContext();

//Permite que los componentes hijos puedan utilizar este contexto.
export const CartProvider = ({ children }) => {

  //State para almacenar los productos agregados al carrito.
  const [cartItems, setCartItems] = useState([]);

  //Nos permite agregar un producto al carrito.
  const addToCart = (product) => {
    //Agregamos el producto al array de productos y mantemos actualizado.
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    //Nos permite que cualquier componente hijo pueda obtener los datos.
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
