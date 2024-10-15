import { Navbar, Nav} from 'react-bootstrap';
import './about.css';
import Footer from './footer'

function about(){
    return(
        <div className='about'>
            <div className='navbar'>
                <img className='logo' src='./OIP.jpeg' alt="Logo" />
                <h1 className="about-title">Vogue Wallet</h1>
                <Navbar>
                    <Nav className='nav1'> 
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/pant">Pant</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                    
                </Navbar>
            </div>
            

            <div className="about-us">
    <h1 className="about-title">About</h1>
    <p className="about-intro">
    The Vogue Wallet is a statement piece that merges fashion with function, designed for those who appreciate style in every detail. Crafted from high-quality materials, it boasts a sleek, minimalist design with clean lines and subtle yet sophisticated branding.
    </p>

    <div className="about-mission">
        <h2>Target customer</h2>
        <p>
        Welcome to Vogue Wallet, your go-to boutique for the latest in fashion!  it has been a cornerstone of style and trend-setting for many years. As the new owner, I'm thrilled to continue our legacy of offering unique, great-quality pieces that inspire confidence and individuality
        </p>
    </div>

    
    

    <div className="about-shop">
        <h2>About shop</h2>
        <p>
        
        Welcome to our shop, where style meets craftsmanship in every item we offer. We pride ourselves on curating a selection of premium products that blend elegance, functionality, and quality. Whether you're looking for the latest fashion accessories, timeless wardrobe staples, or unique pieces that stand out, our collection is designed to cater to diverse tastes and need
        </p>
    </div>

    <div className="about-contact">
        <h2>Contact Us</h2>
        <p>
           any issues call the number
           +91 7891234506
        </p>
    </div>
</div>


            <Footer />
        </div>
    )
}
export default about;