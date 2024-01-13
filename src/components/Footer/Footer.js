import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import '../../assets/styles/main.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Restaurant Logo */}
                <nav>
                    {/* ... (unchanged code) */}
                    <img
                        height={50}
                        width={250}
                        src={require('../../assets/images/logo.png')}
                        alt='logo'
                    />
                </nav>

                {/* Navigation */}
                <nav className="navigation">
                    <h4 className="footer-heading card-title"> Doormat Navigation</h4>
                    <ul className='paragraph-text'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>

                {/* Contact */}
                <div className="contact">
                    <h4 className="footer-heading">Contact</h4>
                    <p>Address: 123, Crescent road, Lagos</p>
                    <p>Email: info@littelemon.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>

                {/* Social Media Icons */}
                <div className="social-media">
                    <h4 className="footer-heading">Social Media Links</h4>
                    <div>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='footer-color'>
                <div className="footer-bottom">

                    <div>
                        {/* Designed By */}
                        <div className="designed-by">Designed by Adeoluwa</div>
                    </div>
                    <div>
                        {/* Image Credit */}
                        <div className="image-credit">Images credit: <a href='freepik.com'>Freepik</a></div>
                    </div>
                </div>

                <div className='footer-last'>
                    {/* Copyright */}
                    <p className="copyright">&copy; 2024 Little Lemon. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
