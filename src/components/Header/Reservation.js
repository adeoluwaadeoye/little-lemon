
// MyFormOverlay.js
import React, { useState } from 'react';
import './Reservation.css';

const MyFormOverlay = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        numberOfPeople: '',
        date: '',
        time: '',
        specialRequests: '',
        seatingPreference: 'indoor',
    });

    const [isReservationSuccess, setReservationSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating a reservation booking
        setTimeout(() => {
            setReservationSuccess(true);
        }, 1000); // Adding a delay to simulate an asynchronous operation
    };

    const handlePopupClose = () => {
        setReservationSuccess(false);
        onClose();
    };

    return (
        <div className={`overlay ${isReservationSuccess ? 'success' : ''}`}>
            <div className={`modal ${isReservationSuccess ? 'success' : ''}`}>
                <button className="close-button" onClick={handlePopupClose}>
                    &times;
                </button>
                {isReservationSuccess ? (
                    <div className="success-message">
                        <p>Your reservation has been successfully booked!</p>
                        <p className='mark'>✔</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {/* Your form fields */}
                        <label htmlFor="name">
                            Name:
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="email">
                            Email:
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="phone">
                            Phone:
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="numberOfPeople">
                            Number of People:
                            <input
                                type="number"
                                id="numberOfPeople"
                                name="numberOfPeople"
                                value={formData.numberOfPeople}
                                onChange={handleChange}
                                required
                                min={1}
                            />
                        </label>
                        <label htmlFor="date">
                            Date:
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="time">
                            Time:
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="specialRequests">
                            Special Requests:
                            <textarea
                                id="specialRequests"
                                name="specialRequests"
                                value={formData.specialRequests}
                                onChange={handleChange}
                            />
                        </label>
                        <fieldset style={{ display: 'flex' }}>
                            <legend>Seating Preference</legend>
                            <label htmlFor="indoor">
                                Indoor
                                <input
                                    type="radio"
                                    id="indoor"
                                    name="seatingPreference"
                                    value="indoor"
                                    checked={formData.seatingPreference === 'indoor'}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="outdoor">
                                Outdoor
                                <input
                                    type="radio"
                                    id="outdoor"
                                    name="seatingPreference"
                                    value="outdoor"
                                    checked={formData.seatingPreference === 'outdoor'}
                                    onChange={handleChange}
                                />
                            </label>
                        </fieldset>
                        <button type="submit">Submit Reservation</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default MyFormOverlay;
