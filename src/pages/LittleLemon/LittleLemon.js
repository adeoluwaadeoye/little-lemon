import React from 'react';
import './LittleLemon.css'

const LittleLemon = () => {
    // Assuming 'image1' and 'image2' are variables that hold the paths to your images
    const image1 = 'assets//images/restaurant.png';
    const image2 = 'assets/images/restaurantchef.png';
    return (
        <section className='about container' id='about-section'>
            <div className='about-left'>
                <div className='about-heading'>
                    <h3 className='display-title'>
                        Little Lemon
                    </h3>
                    <h4>Chicago</h4>
                </div>

                <div className='about_restaurant'>
                    <p className='lead-text'>
                        Indulge in a culinary journey at Little Lemon.
                        Our passion for exquisite flavors and warm hospitality
                        sets the stage for a dining experience that transcends
                        the ordinary. Join us and savor the essence of exceptional cuisine.
                    </p>
                </div>

                <button className='button'>Know more</button>
            </div>
            <div className='restaurant-hero'>
                {/* Using the img tag with the first image path */}
                <img src={image1} alt="Little Lemon Restaurant" className='res_first' />

                {/* Using the img tag with the second image path */}
                <img src={image2} alt="Little Lemon Interior" className='res_second' />
            </div>
        </section>
    );
};

export default LittleLemon;
