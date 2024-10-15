import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Footer from './footer';

function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSignout = () => {
        navigate('/Login');
    };

    const addCart = (product) => {
        navigate('/cart', { state: product });
    };

    const products = [
        // Add your product data here
    ];

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const cartitem = () => {
        navigate('/cart')
    }

    return (
        <div className="home">
            <div className='ads'>
                <p className='animate'>WELCOME TO VOGUE WALLET HAPPY SHOPPING</p>
            </div>

            <div className="navbar">
                <img className="logo" src="./OIP.jpeg" alt="Logo" />
                <Navbar>
                    <Nav className="nav1">
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/pant">Pant</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                    <button className="signout-btn" onClick={handleSignout}>Sign Out</button>
    
                </Navbar>

               
                    <button className='cartitem' onClick={cartitem}>Cart</button>
               </div>

            <div className="mw">
                {filteredProducts.map((product) => (
                    <div className="img-container" key={product.id}>
                        <img className="product-img" src={product.imgSrc} alt={product.title} />
                        <a className="tit" href="#">{product.title}</a>
                        <p>{product.discount} {product.price}</p>
                        <button className="but" onClick={() => addCart(product)}>Add Cart</button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
