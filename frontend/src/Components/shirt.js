import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './shirt.css';
import Footer from './footer'

const shirts = [
    { id: 1, title: "Cotton tunic with stripes for girls", price: "₹877", discount: "-57%", imgSrc: "./images/womenshirt/ws11.jpg" },
    { id: 2, title: "Ethnic basket", price: "₹847", discount: "-45%", imgSrc: "./images/menshirt/ms6.jpg" },
    { id: 3, title: "Women Regular Fit Printed Spread Collar Casual Shirt", price: "₹625", discount: "-23%", imgSrc: "./images/womenshirt/ws5.jpg" },
    { id: 4, title: "Men Printed Regular Fit Shirt with Spread-Collar", price: "₹324", discount: "-85%", imgSrc: "./images/menshirt/ms15.jpg" },
    { id: 5, title: "Green Checkered Casual Shirt", price: "₹653", discount: "-43%", imgSrc: "./images/menshirt/ms4.jpg" },
    { id: 6, title: "Women Printed Casual Shirt", price: "₹743", discount: "-45%", imgSrc: "./images/womenshirt/ws1.jpg" },
    { id: 7, title: "Lymio Casual Shirt for Men", price: "₹982", discount: "-76%", imgSrc: "./images/menshirt/ms10.jpg" },
    { id: 8, title: "Women Spread Collar Striped Casual Shirt", price: "₹656", discount: "-32%", imgSrc: "./images/womenshirt/ws2.jpg" },
    { id: 9, title: "Men Slim Fit Solid Slim Collar Formal Shirt", price: "₹679", discount: "-21%", imgSrc: "./images/menshirt/ms12.jpg" },
    { id: 10, title: "TRENDY WOMEN FASHION DELTA SHIRT", price: "₹632", discount: "-67%", imgSrc: "./images/womenshirt/ws9.jpg" },
    { id: 11, title: "CB-COLEBROOK Men's Regular Fit", price: "₹890", discount: "-54%", imgSrc: "./images/menshirt/ms7.jpg" },
    { id: 12, title: "Stylecast X Slyck", price: "₹563", discount: "-45%", imgSrc: "./images/womenshirt/ws6.jpg" },
    { id: 13, title: "Tagdo Men's Solid Shirt", price: "₹547", discount: "-67%", imgSrc: "./images/menshirt/ms5.jpg" },
    { id: 14, title: "Casual to Formal Versatility", price: "₹903", discount: "-39%", imgSrc: "./images/menshirt/ms1.jpg" },
    { id: 15, title: "Classic Partywear Women Shirts", price: "₹739", discount: "-54%", imgSrc: "./images/womenshirt/ws13.jpg" },
    { id: 16, title: "U-TURN Casual Shirt for Men", price: "₹985", discount: "-76%", imgSrc: "./images/menshirt/ms13.jpg" },
    { id: 17, title: "Women Regular Fit Solid Casual Shirt", price: "₹300", discount: "-90%", imgSrc: "./images/womenshirt/ws7.jpg" },
    { id: 18, title: "Men Regular Fit Solid full sleeves Casual Shirt", price: "₹456", discount: "-56%", imgSrc: "./images/menshirt/ms16.jpg" },
    { id: 19, title: "Trishikhine Women's Regular Fit", price: "₹987", discount: "-78%", imgSrc: "./images/womenshirt/ws3.jpg" },
    { id: 20, title: "Trending Men's Shirts", price: "₹654", discount: "-37%", imgSrc: "./images/menshirt/ms9.jpg" },
    { id: 21, title: "Long Tunic Shirt for Women Soft Comfy Cotton", price: "₹654", discount: "-76%", imgSrc: "./images/womenshirt/ws14.jpg" },
    { id: 22, title: "Leriya Fashion Men's Shirt", price: "₹789", discount: "-65%", imgSrc: "./images/menshirt/ms14.jpg" }
];

function Shirt() {
    const navigate = useNavigate();

    const addCart = (shirt) => {
        navigate('/saddcart', { state: { shirt } });
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

            <h1 className='sst'>Shirt</h1>
            <div className='ads'>
                <p className='animate'>Welcome to Starstyle, your premier destination for customizable clothing! Operated by AVC eVentures, we believe that fashion should be a personal expression of who you are. Our mission is to provide you with high-quality, tailored clothing options that reflect your unique style.</p>
            </div>

            <div className='sh'>
                {shirts.map((shirt) => (
                    <div className={`cont-${shirt.id}`} key={shirt.id}>
                        <img className={`img-${shirt.id}`} src={shirt.imgSrc} alt={shirt.title} />
                        <a className="tit" href='/saddcart'>{shirt.title}</a>
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
