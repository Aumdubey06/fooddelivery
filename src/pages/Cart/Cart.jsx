import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
    const nagivate=useNavigate();
  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return food_list.reduce((total, item) => {
      if (cartItems[item._id] > 0) {
        return total + item.price * cartItems[item._id];
      }
      return total;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = 2; // Assuming fixed delivery fee
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price * 84}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹ {84* item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>₹ {84* subtotal}</p>
            </div>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>₹ {84* deliveryFee}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>₹ {84* total}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button> {/* Navigate to /order */}
        </div>
       
      </div>

      <div className='cart-promocode'>
        <div>
          <p>If you have a promocode, enter it here</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='Promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
