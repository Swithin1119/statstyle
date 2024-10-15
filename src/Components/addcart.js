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
            navigate('/home'); // Redirect if no product is passed
        }
    }, [location.state, navigate]);

    const addToCart = async () => {
        if (!product) return;

        const newCart = [...cart, {
            productId: product.id,
            title: product.title,
            price: product.price,
            imgSrc: product.imgSrc,
        }];

        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        navigate('/cart');
        try {
            // Send cart items to the backend
            await axios.post('http://localhost:5000/api/cart', { items: newCart });
            // Redirect to cart page after successful addition
        } catch (error) {
            console.error('Error adding to cart:', error);
            // Optionally show an error message
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            if (item.price && typeof item.price === 'string') {
                const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
                return total + (isNaN(price) ? 0 : price);
            }
            return total;
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
                    <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
                </div>
            ) : (
                <p>No product selected</p>
            )}

            <div className="cart-summary">
                <h3>Cart Summary</h3>
                <p>Total Items: {cart.length}</p>
                <p>Total Price: ₹{calculateTotal().toFixed(2)}</p>
            </div>
        </div>
    );
}

export default AddCart;