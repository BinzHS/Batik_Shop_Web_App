import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './Reducers';

const Cart = createContext();

const products = [
  { id: '1', image: '/path/to/image1.jpg', brand: 'Liora', title: 'Batik Blossom Dress', price: '₨ 9,990.00', inStock: 5 },
  { id: '2', image: '/path/to/image2.jpg', brand: 'Liora', title: 'Veronica Batik Designer Top', price: '₨ 6,990.00', inStock: 3 },
  { id: '3', image: '/path/to/image3.jpg', brand: 'Liora', title: 'Batik Cotton Skirt', price: '₨ 7,990.00', inStock: 0 },
  { id: '4', image: '/path/to/image4.jpg', brand: 'Liora', title: 'Cartoon Astronaut', price: '$78', inStock: 7 },
  { id: '5', image: '/path/to/image5.jpg', brand: 'Liora', title: 'Mix of Cute Batik Dress', price: '₨ 6,990.00', inStock: 2 },
  { id: '6', image: '/path/to/image6.jpg', brand: 'Liora', title: 'Goldenrod Batik Dress', price: '₨ 7,990.00', inStock: 4 },
  { id: '7', image: '/path/to/image7.jpg', brand: 'Liora', title: 'Tindra Batik Dress', price: '₨ 7,990.00', inStock: 1 },
  { id: '8', image: '/path/to/image8.jpg', brand: 'Liora', title: 'Redwine Flowery Batik Dress', price: '₨ 6,990.00', inStock: 0 },
  { id: '9', image: '/path/to/image9.jpg', brand: 'Liora', title: 'Christmas Cactus Flowery Dress', price: '₨ 6,990.00', inStock: 6 },
];

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
