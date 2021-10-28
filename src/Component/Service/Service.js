import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, name } = service;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <NavLink to="/register">
                            <button>Book Now</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;