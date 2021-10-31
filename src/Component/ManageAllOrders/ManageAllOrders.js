import React from 'react';
import { NavLink } from 'react-router-dom';
import useAllOrders from '../../Hooks/useAllOrders';
import useAuth from '../../Hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrder] = useAllOrders();
    const { user } = useAuth();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://desolate-spire-86561.herokuapp.com/users/${id}`
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                if (data.deletedCount) {
                    alert('successfully removed');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrder(remaining);
                }
            });
        }
    };
    return (
        <div>
            <h1 className="text-center">All the Orders that was placed by our customer;</h1>
            {!user.email &&
                <small>**Note: Only admin can manage this page</small>}
            <div className="card d-flex align-items-center justify-content-center mt-5">
                <ul className="list-group list-group-numbered">
                    {
                        orders.map(order => <li key={order._id} className="list-group-item">{order?.packageName} {user.email ?
                            <button onClick={() => handleDelete(order._id)} className="btn btn-danger">remove</button> :
                            <button onClick={() => handleDelete(order._id)} className="btn disabled  btn-danger">remove</button>} </li>)
                    }
                </ul>
                <NavLink to="/manageOrder">
                    <button className=" mt-3 btn btn-danger">Mange your orders</button></NavLink>
            </div>
        </div>
    );
};

export default ManageAllOrders;