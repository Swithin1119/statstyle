import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './adminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); // State for the selected item
  const navigate = useNavigate();  // Initialize useNavigate to handle redirection

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
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Function to log out
  const handleLogout = () => {
    localStorage.removeItem('token');  // Clear the token from localStorage
    navigate('/login');  // Redirect to the login page (or any other route)
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
                    {/* Button to view item details */}
                    <button 
                      className="view-item-button" 
                      onClick={() => handleItemClick(item)}
                    >
                      View Item
                    </button>
                  </div>
                ))}
              </td>
              <td>${order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display selected item details in a modal or separate section */}
      {selectedItem && (
        <div className="item-details-modal">
          <h3>Item Details</h3>
          <p><strong>Name:</strong> {selectedItem.name}</p>
          <p><strong>Quantity:</strong> {selectedItem.quantity}</p>
          {/* Assuming there is an image field in the item */}
          <img src={selectedItem.imageUrl} alt={selectedItem.name} className="item-image" />
          <button className="close-button" onClick={() => setSelectedItem(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
