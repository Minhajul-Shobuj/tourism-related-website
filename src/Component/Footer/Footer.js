import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="d-flex bg-secondary justify-content-around my-3 rounded-pill">
                <div>
                    <h1>Contact us</h1>
                    <h5>Email:</h5> <p>easytourinfo@gmail.com</p>
                    <h5>Mobile:</h5> <p>01700500000</p>
                </div>
                <div className="text-center w-50 mb-4">
                    <h1>About us</h1>
                    <p>We provide international travel products & services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure & Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations...<Link to="/about">more</Link> </p>
                </div>
            </div>
            <h6>© All right reserved easytour.com </h6>
        </div>
    );
};

export default Footer;