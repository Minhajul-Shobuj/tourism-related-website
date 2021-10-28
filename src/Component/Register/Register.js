import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    return (
        <div>
            <h1>This is Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                Name: <input className="ms-3 mt-3" {...register("Name", { required: true, maxLength: 20 })} defaultValue={user.displayName} />
                <br />
                Email: <input className="ms-3 mt-3" {...register("email")} defaultValue={user.email} />
                <br />
                Country:<input className="ms-3 mt-3" {...register("country")} />
                <br />
                Age: <input className="ms-3 mt-3" type="number" {...register("age", { min: 18, max: 99 })} />
                <br />
                <input className="ms-3 mt-3" type="submit" />
            </form>
        </div>
    );
};

export default Register;