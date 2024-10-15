import React, { useState } from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log(`Subscribed with email: ${email}`);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} Vogue Wallet. All Rights Reserved.</p>
                    <ul className="footer-links">
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-center">
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        
                    </div>
                    <div className="newsletter">
                        <h4>Any Queries </h4>
                        <form onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                           
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="contact-info">
                        <h4>Contact Us</h4>
                        <p>Email:VogueWallet@gmail.com</p>
                        <p>Contact: +91 7891234560</p>
                    </div>


                   
                </div>
            </div>
        </footer>
    );
}

export default Footer;
