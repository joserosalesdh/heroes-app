import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }; //si no existe voy a retornar un objeto en logged en false
};


const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]) //Con este efecto lo que quiero lograr es que el user name se mantenga en la navbar cuando toco otras opciones del menu

    return (
        <AuthContext.Provider value={{ user, dispatch }}>

            <AppRouter />

        </AuthContext.Provider>


    )
}

export default HeroesApp