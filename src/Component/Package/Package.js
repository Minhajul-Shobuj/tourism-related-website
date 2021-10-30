import React from 'react';
import { NavLink } from 'react-router-dom';
import './package.css'

const Package = ({ service }) => {
    const { img, name, optional, _id } = service;
    return (
        <div>
            <div className="col">
                <div className="cards card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{optional}</p>
                    </div>
                    <div className="card-footer">
                        <NavLink to={`/register/${_id}`}>
                            <button>Book Now</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;