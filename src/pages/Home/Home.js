import React from 'react'
import '../../assets/styles/main.css'
import './Home.css'

const Home = () => {
    return (
        <section className='home' id='home-section'>
            <div className='home-left'>
                <div className='home-heading'>
                    <h1 className='display-title'>Little Lemon</h1>
                    <h4 className='card-title'>Chicago</h4>
                </div>

                <div className='home-welc-msg'>
                    <p className='paragraph-text'>We are family owned mediterranean restaurant,
                        focused on tradititional recipes served with
                        a modern twist
                    </p>
                </div>

                <div>
                    <button className='button lead-text'>Reserve a table</button>
                </div>
            </div>

            <div className='home-right'>
                <img
                    height={470}
                    width={400}
                    src={require('../../assets/images/homebg4.png')}
                    alt='logo'
                />
            </div>

        </section>
    )
}

export default Home