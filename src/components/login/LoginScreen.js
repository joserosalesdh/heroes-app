import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => { //extraigo el history de las props

    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        // history.replace('/')
        dispatch({
            type: types.login,
            payload: {
                name: 'Jose'
            }
        });
        history.replace('/')
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
//extraer del context la function dispatch y este tiene que mandar a llamar un action que tenfa