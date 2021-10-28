import React from 'react';
import useProducts from '../../Hooks/allServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useProducts();
    return (
        <div>
            <h1 className="mt-5">All of our Services for You</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service => <Service service={service} key={service.name}></Service>)}
            </div>
        </div>
    );
};

export default Services;