// TestimonialSlider.js

import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css'; // You can create a CSS file for additional styling
import testimonialsData from './DataApi'; // Adjust the import path accordingly

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className='testimonial container'>
            <h2 className='display-title'>Testimonials</h2>

            <div className='test_inner'>

                <div className='testimonial-front'>
                    <div><FontAwesomeIcon icon={faQuoteLeft} /></div>
                    <div className='testimonial-cover'>
                        <p className='card-title left'>Discovering culinary excellence at Little Lemon has been a joy. From delectable flavors to impeccable service, every visit is a delightful journey of taste and hospitality.</p>
                    </div>
                </div>


                <div className="testimonial-slider">
                    <Slider {...settings}>
                        {testimonialsData.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-item">
                                <img src={testimonial.imagePath} alt="User" className="testimonial-image" />
                                <p className="testimonial-comment">{testimonial.comment}</p>
                                <p className="testimonial-name">{testimonial.name}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
