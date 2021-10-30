import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import usePackages from '../../Hooks/useAllPackages';

const Home = () => {
    const [services] = usePackages();
    const service = services.slice(11);
    return (
        <div>
            <h1 className="fw-bolder text-secondary">Always we tried to provided you the best Service</h1>
            <div className="d-flex align-items-center justify-content-center my-3">
                <Carousel className=" w-50">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/CQqGx1Q/religious-2262799-1280.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p className="text-warning fw-bold">Eid in Makkah Package</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/Lkw4bPZ/cami-3724921-1920.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p className="fw-bold text-warning">Ramadan Umrah Package</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/mznL0N7/sylhet-4296348-1920.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p className="fw-bold text-warning">Sylhet Tour Package</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1 className="text-success fw-bold">Some of our top rated Packages--</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                {
                    service.map(element =>
                        <div key={element._id} className="col">
                            <div className="cards card h-100">
                                <img src={element.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">{element.optional}</p>
                                </div>
                                <div className="card-footer">
                                    <NavLink to={`/register/${element._id}`}>
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