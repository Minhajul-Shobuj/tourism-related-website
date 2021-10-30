import React from 'react';
import usePackages from '../../Hooks/useAllPackages';
import Package from '../Package/Package';

const Packages = () => {
    const [services] = usePackages();
    return (
        <div>
            <h1 className="mt-5">All of our Packages for You</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service => <Package service={service} key={service._id}></Package>)}
            </div>
        </div>
    );
};

export default Packages;