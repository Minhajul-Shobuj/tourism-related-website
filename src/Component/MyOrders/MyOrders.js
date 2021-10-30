import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useMyOrders from '../../Hooks/useMyOrders';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders] = useMyOrders();
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
        const myOrders = orders.filter(order =>
            order.email === user.email);
        setmyOrders(myOrders);
    }, [orders]);
    return (
        <div>
            <h1 className="text-center">Your Orders</h1>
            <div className="card d-flex align-items-center justify-content-center mt-5">
                <ul className="list-group list-group-numbered">
                    {
                        myOrders.map(order => <li key={order._id} className="list-group-item">{order?.packageName}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default MyOrders;