import { Navbar, Nav} from 'react-bootstrap';
import './about.css';
import Footer from './footer'

function about(){
    return(
        <div className='about'>
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
            

            <div className="about-us">
    <h1 className="about-title">About Starstyle</h1>
    <p className="about-intro">
        Welcome to Starstyle, your premier destination for customizable clothing! Operated by AVC eVentures, we believe that fashion should be a personal expression of who you are. Our mission is to provide you with high-quality, tailored clothing options that reflect your unique style.
    </p>

    <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
            At Starstyle, we strive to empower individuals through fashion. We aim to make personalized clothing accessible and affordable, ensuring that everyone can wear what they love. Our commitment to quality and customer satisfaction drives everything we do.
        </p>
    </div>

    <div className="about-vision">
        <h2>Our Vision</h2>
        <p>
            We envision a world where everyone can express their individuality through style. By providing customizable options, we hope to inspire creativity and confidence in our customers.
        </p>
    </div>

    <div className="about-values">
        <h2>Our Values</h2>
        <ul className="values-list">
            <li><strong>Quality:</strong> We prioritize high-quality materials and craftsmanship.</li>
            <li><strong>Innovation:</strong> We constantly seek new ways to enhance your shopping experience.</li>
            <li><strong>Community:</strong> We believe in building a supportive community of fashion enthusiasts.</li>
            <li><strong>Sustainability:</strong> We are committed to ethical practices and reducing our environmental footprint.</li>
        </ul>
    </div>

    <div className="about-commitment">
        <h2>Our Commitment</h2>
        <p>
            We are dedicated to ensuring a seamless shopping experience. From our user-friendly website to our responsive customer service, we are here to help you every step of the way. Your satisfaction is our top priority!
        </p>
    </div>

    <div className="about-contact">
        <h2>Contact Us</h2>
        <p>
            Have questions or feedback? We’d love to hear from you! Reach out to us at <a href="mailto:hello@starstyle.in">hello@starstyle.in</a>.
        </p>
    </div>
</div>


            <Footer />
        </div>
    )
}
export default about;