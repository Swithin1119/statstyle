import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [showPopup, setShowPopup] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
      return total + (isNaN(price) ? 0 : price);
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const userId = localStorage.getItem('email'); // Retrieve email from local storage
    const orderDetails = {
      userId,
      
      name,
      address,
      paymentMethod,
      items: cart.map(item => ({
        productId: item.productId,
        name: item.title,
        quantity: item.quantity || 1,
        price: parseFloat(item.price.replace('₹', '').replace(',', '')), // Ensure price is a number
        imageUrl: item.imgSrc,
      })),
      total: calculateTotal(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      const data = await response.json();
      console.log('Order placed:', data);
      localStorage.removeItem('cart');
      setShowPopup(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/home');
  };

  const contshop = () => {
    navigate('/home');
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address with Ph.No:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="payment">Payment Method:</label>
          <select
            id="payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Google Pay">Google Pay</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>
        <h3>Total: ₹{calculateTotal().toFixed(2)}</h3>
        <button type="submit" className="checkout-button">Place Order</button>
        <br />
        <button type="button" className="checkout-btn" onClick={contshop}>Continue Shopping</button>
      </form>

      {showPopup && (
        <div className="popup">
          <h3>Order Placed Successfully!</h3>
          <p>Your order has been successfully placed. Thank you!</p>
          <button onClick={handleClosePopup}>Go to Home</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
