import React from 'react';
import { NavLink } from 'react-router-dom';
import useMyOrders from '../../Hooks/useMyOrders';

const MyOrders = () => {
    const [myOrders] = useMyOrders();
    return (
        <div>
            <h1 className="text-center">Your Orders</h1>
            <div className="card d-flex align-items-center justify-content-center mt-5">
                <ul className="list-group list-group-numbered">
                    {
                        myOrders.map(order => <li key={order._id} className="list-group-item">{order?.packageName}</li>)
                    }
                </ul>
                <NavLink to="/manageOrder">
                    <button className=" mt-3 btn btn-danger">Mange your orders</button></NavLink>
            </div>
        </div>
    );
};

export default MyOrders;