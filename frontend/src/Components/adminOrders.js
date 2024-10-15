import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null); // State for the selected order
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:5000/api/orders', {
          method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch orders');
        }

        setOrders(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOrders();
  }, []);

  // Function to handle item click
  const handleViewOrderClick = (order) => {
    setSelectedOrder(order); // Store the entire order, not individual item
  };

  // Function to log out
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="admin-orders-container">
      <h2>All Orders</h2>
      {error && <p className="error-message">{error}</p>}

      {/* Logout button */}
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th> {/* Changed to generic Action column */}
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.userId}</td>
              <td>
                {order.items.map((item, index) => (
                  <div key={item.productId}>
                    {item.name} (x{item.quantity})
                  </div>
                ))}
              </td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                {/* Single View Order button per row */}
                <button 
                  className="view-item-button" 
                  onClick={() => handleViewOrderClick(order)}
                >
                  View Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display selected order details in a modal */}
      {selectedOrder && (
        <div className="item-details-modal">
          <h3>Order Details</h3>
          <p><strong>Order ID:</strong> {selectedOrder._id}</p>
          <p><strong>User ID:</strong> {selectedOrder.userId}</p>
          <p><strong>Total:</strong> ${selectedOrder.total}</p>
          <h4>Items</h4>
          {selectedOrder.items.map(item => (
            <div key={item.productId}>
              <p><strong>Item:</strong> {item.name} (x{item.quantity})</p>
              <img src={item.imageUrl} alt={item.name} className="item-image" />
            </div>
          ))}
          <button className="close-button" onClick={() => setSelectedOrder(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
