import React, { useState } from 'react';
import './Reservation.css'

const MyFormOverlay = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        numberOfPeople: '',
        date: '',
        time: '',
        specialRequests: '',
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
        // Simulating a reservation booking, you can replace this with your actual logic.
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
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {/* Your form fields */}
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Number of People:
                            <input
                                type="number"
                                name="numberOfPeople"
                                value={formData.numberOfPeople}
                                onChange={handleChange}
                                required
                                min={1}
                            />
                        </label>
                        <label>
                            Date:
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Time:
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Special Requests:
                            <textarea
                                name="specialRequests"
                                value={formData.specialRequests}
                                onChange={handleChange}
                            />
                        </label>
                        <button type="submit">Submit Reservation</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default MyFormOverlay;
