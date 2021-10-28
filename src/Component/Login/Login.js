import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn, user, logOut } = useAuth();
    return (
        <div className="mt-5">
            <h1>Please,Login</h1>
            {user.displayName ?
                <button onClick={logOut}>Logout</button> :
                <button onClick={googleSignIn} className="btn btn-primary" type="button">Login with google</button>}
        </div>
    );
};

export default Login;