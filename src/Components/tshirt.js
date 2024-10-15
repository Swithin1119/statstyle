import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './tshirt.css';
import Footer from './footer'

const tshirts = [
    { id: 1, title: "Women Typography Round Neck Polyester White T-Shirt", price: "₹433", discount: "-45%", imgSrc: "./images/womens/w11.jpg" },
    { id: 2, title: "ATICX Men's Slim Fit Polyester Sleeveless", price: "₹765", discount: "-54%", imgSrc: "/images/mens/m7.jpg" },
    { id: 3, title: "Dika Sports", price: "₹876", discount: "-34%", imgSrc: "/images/mens/m5.jpg" },
    { id: 4, title: "Oversized T Shirt For Women", price: "₹654", discount: "-38%", imgSrc: "./images/womens/w4.jpg" },
    { id: 5, title: "Cool Black Customized Women Polo T-Shirt", price: "₹909", discount: "-45%", imgSrc: "./images/womens/w2.jpg" },
    { id: 6, title: "India Jersey", price: "₹977", discount: "-49%", imgSrc: "/images/mens/m1.jpg" },
    { id: 7, title: "Tommy Hilfiger Men's Full Sleeve", price: "₹963", discount: "-23%", imgSrc: "/images/mens/m10.jpg" },
    { id: 8, title: "Softwear Womens Long Sleeve Bottle Green Plain T-Shirt", price: "₹865", discount: "-67%", imgSrc: "./images/womens/w15.jpg" },
    { id: 9, title: "Pink Custom T Shirts for Women", price: "₹758", discount: "-34%", imgSrc: "./images/womens/w13.jpg" },
    { id: 10, title: "Yellow Polo T-Shirt", price: "₹234", discount: "-64%", imgSrc: "/images/mens/m12.jpg" },
    { id: 11, title: "Rang Barse T-Shirt", price: "₹963", discount: "-67%", imgSrc: "./images/womens/w7.jpg" },
    { id: 12, title: "Dika Sports Customized Jersey", price: "₹344", discount: "-75%", imgSrc: "/images/mens/m3.jpg" },
    { id: 13, title: "Beautiful Paint Women's T-shirt", price: "₹754", discount: "-46%", imgSrc: "./images/womens/w8.jpg" },
    { id: 14, title: "YOURJERSEY Olympics 2024 Team India Jersey", price: "₹456", discount: "-23%", imgSrc: "/images/mens/m4.jpg" },
    { id: 15, title: "Hoodies Pullover Sweatshirt", price: "₹567", discount: "-13%", imgSrc: "./images/womens/w9.jpg" },
    { id: 16, title: "Overwatch Ultimate Genji Men's Zip", price: "₹876", discount: "-45%", imgSrc: "/images/mens/m14.jpg" },
    { id: 17, title: "THE NOMHERD Jumping Bat Oversized Tshirt", price: "₹543", discount: "-56%", imgSrc: "./images/womens/w5.jpg" },
    { id: 18, title: "New Panda Printed Round Neck Cotton Blend T-Shirt For Women's", price: "₹678", discount: "-42%", imgSrc: "./images/womens/w12.png" },
    { id: 19, title: "White Holi Printing T-shirt", price: "₹657", discount: "-67%", imgSrc: "/images/mens/m6.jpg" },
    { id: 20, title: "Argentina Football Jersey", price: "₹898", discount: "-76%", imgSrc: "/images/mens/m8.jpg" },
    { id: 21, title: "Dilly Dilly USA America July 4th Flag Women's Ideal Tank Top", price: "₹999", discount: "-66%", imgSrc: "./images/womens/w16.jpg" },
    { id: 22, title: "Men Custom T Shirt", price: "₹534", discount: "-75%", imgSrc: "/images/mens/m11.jpg" },
    { id: 23, title: "Premier Sports Academy Elite Series Jersey", price: "₹789", discount: "-45%", imgSrc: "/images/mens/m9.jpg" },
    { id: 24, title: "Funday Fashion", price: "₹342", discount: "-43%", imgSrc: "./images/womens/w1.jpg" },
    { id: 25, title: "Tipping Polo T-Shirt", price: "₹907", discount: "-78%", imgSrc: "/images/mens/m2.jpg" },
    { id: 26, title: "Darkbuck Anime T Shirt for Women", price: "₹923", discount: "-56%", imgSrc: "./images/womens/w3.jpg" }
];

function Tshirt() {
    const navigate = useNavigate();

    const addCart = (tshirt) => {
        navigate('/taddcart', { state: { tshirt } });
    };

    return (
        <div>
            <div className='navbar'>
                <img className='logo' src='./logo3.png' alt="Logo" />
                <div className='menu'>
                    <a className='custom' href='/customizes'>Customize Your products</a>
                </div>
                <Navbar>
                    <Nav className='nav1'>
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/tshirt">T-shirt</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                </Navbar>
            </div>
            <h1 className='tst'>T-shirt</h1>
            <div className='ads'>
                <p className='animate'>Welcome to Starstyle, your premier destination for customizable clothing! Operated by AVC eVentures, we believe that fashion should be a personal expression of who you are. Our mission is to provide you with high-quality, tailored clothing options that reflect your unique style.</p>
            </div>

            <div className='ts'>
                {tshirts.map((tshirt) => (
                    <div className={`cont-tshirt-${tshirt.id}`} key={tshirt.id}>
                        <img className={`tshirt-${tshirt.id}`} src={tshirt.imgSrc} alt={tshirt.title} />
                        <a className="tit" href='/taddcart'>{tshirt.title}</a>
                        <p>{tshirt.discount} {tshirt.price}</p>
                        <button className='but' onClick={() => addCart(tshirt)}>Add Cart</button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Tshirt;
