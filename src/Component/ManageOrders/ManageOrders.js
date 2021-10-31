import React from 'react';
import useMyOrders from '../../Hooks/useMyOrders';

const ManageOrders = () => {
    const [myOrders, setmyOrders] = useMyOrders();
    //for deleting orders;
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://desolate-spire-86561.herokuapp.com/users/${id}`
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                if (data.deletedCount) {
                    alert('successfully removed');
                    const remaining = myOrders.filter(order => order._id !== id);
                    setmyOrders(remaining);
                }
            });
        }
    };
    return (
        <div>
            <h1 className="text-center">Manage Your Orders</h1>
            <div className="card d-flex align-items-center justify-content-center mt-5">
                <ul className="list-group list-group-numbered">
                    {
                        myOrders.map(order => <li key={order._id} className="list-group-item">{order?.packageName} <button className="btn btn-warning">pending</button> <button onClick={() => handleDelete(order._id)} className="btn btn-danger">remove</button> </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default ManageOrders;