import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Footer from './footer';

function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSignout = () => {
        // Clear user data from local storage
        localStorage.removeItem('token'); // Remove the authentication token
        localStorage.removeItem('email'); // Remove the stored email (if any)
        localStorage.removeItem('cart'); // Clear the cart
        navigate('/login'); // Redirect to login page
    };

    const addCart = (product) => {
        navigate('/addcart', { state: product });
    };

    const products = [
        { id: 1, imgSrc: "./images/womens/w12.png", title: "ESPRESSO", price: "₹499", discount: "-20%" },
        { id: 2, imgSrc: "./images/menshirt/ms7.jpg", title: "Men's Formal Full Sleeve Shirt", price: "₹677", discount: "-48%" },
        { id: 3, imgSrc: "/images/mens/m2.jpg", title: "T-shirt Logo", price: "₹560", discount: "-35%" },
        { id: 4, imgSrc: "./images/menshirt/ms5.jpg", title: "Half Sleeve Shirt New", price: "₹952", discount: "-12%" },
        { id: 5, imgSrc: "./images/womens/w5.jpg", title: "Lana Del Rey Oversized White", price: "₹568", discount: "-54%" },
        { id: 6, imgSrc: "./images/womenshirt/ws6.jpg", title: "Green Tie & Dyed Loose Fit Rayon Shirt for Women", price: "₹324", discount: "-27%" },
        { id: 7, imgSrc: "./images/womens/w1.jpg", title: "Loose Fit T-shirt", price: "₹857", discount: "-65%" },
        { id: 8, imgSrc: "./images/womens/w15.jpg", title: "Women Red Printed Tank Top", price: "₹457", discount: "-62%" },
        { id: 9, imgSrc: "./images/menshirt/ms12.jpg", title: "Stylish Premium Cotton Men's Shirt", price: "₹685", discount: "-24%" },
        { id: 10, imgSrc: "./images/womenshirt/ws9.jpg", title: "Plain Pink Shirt", price: "₹960", discount: "-38%" },
        { id: 11, imgSrc: "/images/mens/m4.jpg", title: "YOURJERSEY Olympics Team Jersey", price: "₹658", discount: "-30%" },
        { id: 12, imgSrc: "/images/mens/m7.jpg", title: "Pack Of 2 Slim Fit FlexDRY Sleeveless T-shirts", price: "₹981", discount: "-75%" },
    ];

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const cartitem = () => {
        navigate('/cart');
    }

    return (
        <div className="home">
            <div className="navbar">
                <img className="logo" src="./logo3.png" alt="Logo" />
                <div className="menu">
                    <a className="custom" href="/customizes">Customize Your Products</a>
                </div>
                <Navbar>
                    <Nav className="nav1">
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/tshirt">T-shirt</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                    <Nav className="nav2">
                        <div className="dropdown">
                            <NavDropdown title="Profile">
                                <NavDropdown.Item onClick={handleSignout}>Signout</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar>
            </div>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {searchTerm && (
                    <div className="search-term">
                        Searching for: <strong>{searchTerm}</strong>
                    </div>
                )}
                <button className='cartitem' onClick={cartitem}>Cart</button>
            </div>
            <div className='ads'>
                <p className='animate'>Welcome to Starstyle, your premier destination for customizable clothing! Operated by AVC eVentures, we believe that fashion should be a personal expression of who you are. Our mission is to provide you with high-quality, tailored clothing options that reflect your unique style.</p>
            </div>

            <div className="mw">
                {filteredProducts.map((product) => (
                    <div className="img-container" key={product.id}>
                        <img className="product-img" src={product.imgSrc} alt={product.title} />
                        <a className="tit" href='/addcart'>{product.title}</a>
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
