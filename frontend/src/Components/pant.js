import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './pant.css';
import Footer from './footer'

const tshirts = [
    { id: 1, title: "jogger fit", price: "₹510", imgSrc: "./images/t/1.jpg" },
    { id: 2, title: "polo fit", price: "₹810", imgSrc:  "./images/t/2.jpg" },
    { id: 3, title: "denim jean", price: "₹1000", discount: "16%", imgSrc:  "./images/t/3.jpg" },
    { id: 4, title: "lycra", price: "₹450", imgSrc:  "./images/t/4.jpg" },
    { id: 5, title: "cotton pant", price: "₹800", imgSrc:  "./images/t/5.jpg" },
    { id: 7, title: "leggins", price: "₹950", discount: "23%", imgSrc:  "./images/t/7.jpg" },
    { id: 8, title: "women jeans", price: "₹865", imgSrc:  "./images/t/8.jpg" },
    { id: 9, title: "patiala pant", price: "₹950", discount: "30%", imgSrc:  "./images/t/9.jpg" },
    { id: 10, title: "wide leg", price: "₹612",  imgSrc: "./images/st/st3.jpeg" },
    { id: 11, title: "cargo trowsers", price: "₹1120", discount: "25%", imgSrc: "./images/st/st4.jpeg" }
   
];

function Pant() {
    const navigate = useNavigate();

    const addCart = (Pant) => {
        navigate('/Paddcart', { state: { Pant } });
    };

    return (
        <div>
            <div className='ads'>
                <p className='animate'>purchase more than 2000 upto 15% offer</p>
            </div>
            <div className='navbar'>
                <img className='logo' src='./OIP.jpeg' alt="Logo" />
                <h1 className='pt'>Pant</h1>
                <Navbar>
                    <Nav className='nav1'>
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/pant">Pant</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                </Navbar>
            </div>
            
            <div className='pt'>
                {tshirts.map((pant) => (
                    <div className={`cont-pant-${pant.id}`} key={pant.id}>
                        <img className={`pant-${pant.id}`} src={pant.imgSrc} alt={pant.title} />
                        <a className="tit" href="#">{pant.title}</a>
                        <p>{pant.discount} {pant.price}</p>
                        <button className='but' onClick={() => addCart(pant)}>Add Cart</button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Pant;
