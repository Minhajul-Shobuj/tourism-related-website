import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import usePackages from '../../Hooks/useAllPackages';
import image from '../../image/1991562_Freepik.jpg'

const Home = () => {
    const [services] = usePackages();
    const service = services.slice(11);
    return (
        <div>
            <h1 className="fw-bolder text-secondary">Always we tried to provided you the best Service</h1>
            <div>
                <div className="row fw-bolder mx-3 d-flex justify-content-center align-items-center my-3 text-warning">
                    <p className=" col-lg-6 col-md-6 mx-5 fs-5">“A journey of a thousand miles begins with a single step” – Lao Tzu <br />Even the most foreign country or faraway places aren’t light years away. The journey may appear long and intimidating, but when you take one step at a time, it’s manageable. I think this is the perfect way to begin a list of the best quotes for travel lovers.
                    </p>
                    <img className="col-lg-6 col-md-6" style={{ width: '500px', height: '300px' }} src={image} alt="" />
                </div>
                <div className="row fw-bolder mx-3 d-flex justify-content-center align-items-center my-3 text-warning">
                    <p className="col-lg-6 col-md-6 mx-5 fs-5">“I am not the same, having seen the moon shine on the other side of the world” – Mary Anne Radmacher <br />
                        “Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Andre Gide <br />
                        “We take photos as a return ticket to a moment otherwise gone” – Katie Thurmes <br />
                        “There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them” – Jo Walton <br />
                        “Traveling – it leaves you speechless, then turns you into a storyteller” – Ibn Battuta</p>
                </div>
            </div>
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