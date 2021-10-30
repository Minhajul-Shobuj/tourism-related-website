import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useMyOrders from '../../Hooks/useMyOrders';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders] = useMyOrders();
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
        const myOrders = orders.filter(order =>
            order.email === user.email);
        setmyOrders(myOrders);
    }, [orders]);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if (data.deletedCount) {
                alert('successfully removed');
                const remaining = myOrders.filter(order => order._id !== id);
                setmyOrders(remaining);
            }
        })
    }
    return (
        <div>
            <h1 className="text-center">Manage Your Orders</h1>
            <div className="card d-flex align-items-center justify-content-center mt-5">
                <ul className="list-group list-group-numbered">
                    {
                        myOrders.map(order => <li key={order._id} className="list-group-item">{order?.packageName} <button onClick={() => handleDelete(order._id)} className="btn btn-danger">remove</button> </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default ManageOrders;