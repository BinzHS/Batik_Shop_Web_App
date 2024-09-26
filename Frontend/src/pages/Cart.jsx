import React from 'react';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const totalAmount = cart.reduce((acc, curr) => {
    const numericPrice = parseFloat(curr.price.replace(/[^\d.]/g, ''));
    return acc + numericPrice * curr.qty;
  }, 0);

  return (
    <div className="max-w-2xl p-6 mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="mb-6 text-2xl font-bold text-center">Shopping Cart</h2>
      {cart.length > 0 ? (
        <>
          <div className="flex flex-col gap-6">
            {cart.map((prod) => (
              <div className="flex items-center justify-between p-4 border rounded-lg shadow-md" key={prod.id}>
                <img
                  src={prod.image}
                  className="object-cover w-20 rounded-lg h-22"
                  alt={prod.name}
                />
                <div className="flex-1 ml-6">
                  <span className="block text-lg font-semibold">{prod.name}</span>
                  <span className="block text-gray-500 text-md">{prod.title}</span>
                  <span className="block text-gray-500">Rs {parseFloat(prod.price.replace(/[^\d.]/g, ''))}</span>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                      onClick={() =>
                        dispatch({
                          type: 'CHANGE_CART_QTY',
                          payload: { id: prod.id, qty: prod.qty - 1 },
                        })
                      }
                      disabled={prod.qty <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 text-lg">{prod.qty}</span>
                    <button
                      className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                      onClick={() =>
                        dispatch({
                          type: 'CHANGE_CART_QTY',
                          payload: { id: prod.id, qty: prod.qty + 1 },
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <AiFillDelete
                  fontSize="24px"
                  className="text-red-600 cursor-pointer hover:text-red-800"
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: prod,
                    })
                  }
                />
              </div>
            ))}
          </div>
          <div className="mt-6 text-lg font-semibold text-center">
            Total Amount: Rs {totalAmount.toFixed(2)}
          </div>
          <div className="mt-4 text-center">
            <Link to="/checkout">
              <button className="px-6 py-2 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <span className="block p-6 text-lg text-center text-gray-500">Cart is empty</span>
      )}
    </div>
  );
};

export default Cart;
