import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './addcart.css'; 

function AddCart() {
    const location = useLocation();
    const navigate = useNavigate();
    const [shirt, setShirt] = useState(null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        if (location.state && location.state.shirt) {
            setShirt(location.state.shirt);
        }
    }, [location.state]);

    const addToCart = () => {
        if (shirt) {
            const newCart = [...cart, { ...shirt, productId: shirt.id }];
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
            navigate('/cart'); // Navigate to cart page after adding
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
            <h2>Shirt Details</h2>
            {shirt ? (
                <div className="product-details">
                    <img className="product-img" src={shirt.imgSrc} alt={shirt.title} />
                    <h3>{shirt.title}</h3>
                    <p>Price: {shirt.price}</p>
                    <p>Discount: {shirt.discount}</p>
                    <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
                </div>
            ) : (
                <p>No shirt selected</p>
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
