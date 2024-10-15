import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css'; 

function Cart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        setCart(storedCart ? JSON.parse(storedCart) : []);
    }, []);

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            if (item.price && typeof item.price === 'string') {
                const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
                return total + (isNaN(price) ? 0 : price);
            }
            return total;
        }, 0);
    };

    const removeItem = async (index) => {
        try {
            await fetch(`http://localhost:5000/api/cart/${index}`, {
                method: 'DELETE',
            });
            const updatedCart = cart.filter((_, i) => i !== index);
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const contshop = () => {
        navigate('/home');
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img className="cart-item-img" src={item.imgSrc} alt={item.title} />
                            <div className="cart-item-details">
                                <h3>{item.title}</h3>
                                <p>Price: {item.price}</p>
                                <p>Discount: {item.discount}</p>
                            </div>
                            <button className="remove-button" onClick={() => removeItem(index)}>Remove</button>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h3>Total Price: ₹{calculateTotal().toFixed(2)}</h3>
                        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                        <br />
                        <button className="checkout-btn" onClick={contshop}>Continue Shopping</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
