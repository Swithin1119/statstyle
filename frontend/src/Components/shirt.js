import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './shirt.css';
import Footer from './footer'

const shirts = [
    { id: 1, title: "Mens fit line shirt ", price: "₹1200", imgSrc: "./images/st/st1.jpeg" },
    { id: 2, title: "Ethnic basket", price: "₹847", discount: "-45%", imgSrc: "./images/st/st2.jpeg" },
    { id: 3, title: "Men White shirt", price: "₹800",  imgSrc: "./images/st/st5.jpeg" },
    { id: 4, title: "denim blue shirt", price: "₹940", imgSrc: "./images/st/st6.jpeg" },
    { id: 5, title: "Stitched Half Sleeve Regular Fit Shirt", price: "₹700", imgSrc: "./images/st/st7.jpeg" },
    
];

function Shirt() {
    const navigate = useNavigate();

    const addCart = (shirt) => {
        navigate('/saddcart', { state: { shirt } });
    };

    return (
        <div>
             <div className='ads'>
                <p className='animate'>purchase more than 2000 upto 15% offer</p>
            </div>
            <div className='navbar'>
                <img className='logo' src='./OIP.jpeg' alt="Logo" />
                <h1 className='sst'>Shirt</h1>
                <Navbar>
                    <Nav className='nav1'>
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/pant">Pant</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                </Navbar>
            </div>

            
            <div className='sh'>
                {shirts.map((shirt) => (
                    <div className={`cont-${shirt.id}`} key={shirt.id}>
                        <img className={`img-${shirt.id}`} src={shirt.imgSrc} alt={shirt.title} />
                        <a className='tit' href='#'>{shirt.title}</a> 
                        <p>{shirt.discount} {shirt.price}</p>
                        <button className='but' onClick={() => addCart(shirt)}>Add Cart</button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Shirt;
