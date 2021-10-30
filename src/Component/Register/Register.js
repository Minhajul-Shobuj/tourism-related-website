import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import usePackages from '../../Hooks/useAllPackages';
import useAuth from '../../Hooks/useAuth';
import './register.css'

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://desolate-spire-86561.herokuapp.com/users', data)
            .then(function (res) {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Order Placed Successfully');
                    reset();
                }
            })
    };

    const { user } = useAuth();
    const { serviceId } = useParams();
    const [services] = usePackages();
    const [service, setService] = useState({});
    useEffect(() => {
        const singleproduct = services.find(service => service._id === serviceId);
        setService(singleproduct);
    }, [services]);
    return (
        <div className="d-flex row mt-5">
            <div className="col-md-12 col-lg-6" >
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={service?.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{service?.name}</h5>
                                <p className="card-text">{service?.optional}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-6" >
                <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                    Package: <input className="ms-3 mt-3" {...register("packageName")} placeholder="please,enter this package name" />
                    <br />
                    Name: <input className="ms-3 mt-3" {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} />
                    <br />
                    Email: <input className="ms-3 mt-3" {...register("email")} defaultValue={user.email} />
                    <br />
                    Country:<input className="ms-3 mt-3" {...register("country", { required: true })} placeholder="please,enter your country" />
                    <br />
                    Age: <input className="ms-3 mt-3" type="number" {...register("age", { min: 18, max: 99, required: true })} />
                    <br />
                    <input className="ms-3 mt-3" type="submit" placeholder="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default Register;