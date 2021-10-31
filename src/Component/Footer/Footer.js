import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="container d-flex bg-secondary text-warning rounded my-5">
                <div><p>We provide international travel products & services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure & Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations...<Link to="/about">more</Link> </p>
                    <h6>Email:easytourinfo@gmail.com</h6>
                    <h6>Mobile: 01700500000</h6>
                    <small className="text-danger">© All right reserved easytour.com</small></div>
            </div>
        </div>
    );
};

export default Footer;