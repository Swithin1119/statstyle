import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './addcart.css';

function AddCart() {
    const location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        if (location.state) {
            setProduct(location.state);
        } else {
            navigate('/customizes'); // Redirect if no product is passed
        }
    }, [location.state, navigate]);

    const addToCart = async () => {
        if (product) {
            const newProduct = {
                ...product,
                productId: Date.now(), // Generate a unique ID for the product
                quantity: 1, // Default quantity to 1
            };

            const newCart = [...cart, newProduct];
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart)); // Update local storage
            navigate('/cart'); // Redirect to cart page after successful addition
            
            // Send cart items to the backend
            try {
                await axios.post('http://localhost:5000/api/cart', { items: newCart });
            } catch (error) {
                console.error('Error adding to cart:', error);
                // Optionally handle the error, e.g., show a notification
            }
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
            return total + (isNaN(price) ? 0 : price * (item.quantity || 1)); // Use quantity for total calculation
        }, 0);
    };

    return (
        <div className="addcart">
            <h2>Product Details</h2>
            {product ? (
                <div className="product-details">
                    <img className="product-img" src={product.imgSrc} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Price: {product.price}</p>
                    <p>Discount: {product.discount}</p>
                    <p>Custom Text: <span style={{ color: product.textColor, fontFamily: product.fontFamily, fontWeight: product.fontWeight }}>{product.text}</span></p>
                    <p>Size: {product.shirtSize}</p>
                    <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
                </div>
            ) : (
                <p>No product selected</p>
            )}

            <div className="cart-summary">
                <h3>Cart Summary</h3>
                <p>Total Items: {cart.length}</p>
                <p>Total Price: ₹{calculateTotal().toFixed(2)}</p>
                {/* The Place Order button has been removed */}
            </div>
        </div>
    );
}

export default AddCart;
