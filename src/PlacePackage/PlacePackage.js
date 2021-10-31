import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const PlacePackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const check = window.confirm('Are you a Admin?');
        if (check) {
            axios.post('https://desolate-spire-86561.herokuapp.com/packages', data)
                .then(function (res) {
                    console.log(res);
                    if (res.data.insertedId) {
                        alert('Package Placed Successfully');
                        reset();
                    }
                })
        }
    };
    return (
        <div>
            <h3>Place your order--</h3>
            <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                Package-name: <input className="ms-3 mt-3" {...register("name", { required: true, maxLength: 20 })} />
                <br />
                Img-Link: <input className="ms-3 mt-3" type="text" {...register("img")} />
                <br />
                Some Optional-Service :<input
                    style={{
                        width: '250px', height: '80px'
                    }} className="ms-3 mt-3" type="text" {...register("optional", { required: true })} />
                <br />
                <input className="ms-3 mt-3" type="submit" placeholder="Place Order" />
            </form>
        </div>
    );
};

export default PlacePackage;