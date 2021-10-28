import React from 'react';
import { NavLink } from 'react-router-dom';
import useProducts from '../../Hooks/allServices';

const Home = () => {
    const [services] = useProducts();
    const service = services.slice(11);
    return (
        <div>
            <h1>Always we tried to provided you the best Service</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                {
                    service.map(element =>
                        <div key={element.name} className="col">
                            <div className="card h-100">
                                <img src={element.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <NavLink to="/register">
                                        <button>Book Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }                    </div>

        </div>
    );
};

export default Home;