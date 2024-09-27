import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './addcart.css'; 

function AddCart() {
    const location = useLocation();
    const navigate = useNavigate();
    const [tshirt, setTshirt] = useState(null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        if (location.state && location.state.tshirt) {
            setTshirt(location.state.tshirt);
        }
    }, [location.state]);

    const addToCart = () => {
        if (tshirt) {
            const newCart = [...cart, { ...tshirt, productId: tshirt.id }];
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
            <h2>T-Shirt Details</h2>
            {tshirt ? (
                <div className="product-details">
                    <img className="product-img" src={tshirt.imgSrc} alt={tshirt.title} />
                    <h3>{tshirt.title}</h3>
                    <p>Price: {tshirt.price}</p>
                    <p>Discount: {tshirt.discount}</p>
                    <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
                </div>
            ) : (
                <p>No T-shirt selected</p>
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
