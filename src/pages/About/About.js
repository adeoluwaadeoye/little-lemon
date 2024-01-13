import React from 'react';
import AboutApi from './AboutApi';
import './About.css';  // Assuming you have some specific styles for About
import '../../assets/styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className='promo container' id='promo'>
            <div className='about-top'>
                <h1 className='display-title'>This Week's Specials!</h1>
            </div>

            <div className='about-items container'>
                {/* Map over each item in AboutApi array */}
                {AboutApi.map((item) => (
                    <article key={item.id} className='about-item'>
                        <figure>
                            <img src={item.image} alt={`image_placeholder_${item.id}`} />
                        </figure>
                        <div className='about-details'>
                            <div className='about-dish'>
                                <h4>{item.dish}</h4>
                                <p>{item.price}</p>
                            </div>
                            <div className='description'>
                                <p>{item.description}</p>
                            </div>
                            <div className='about-link'>
                                <a href={`#order_${item.dish}`}>Order a delivery</a>
                                <FontAwesomeIcon icon={faTruck} style={{ color: '#495e57' }} className='truck' />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <button className='button button_ctrl'>Order online</button>
        </section>
    );
};

export default About;
