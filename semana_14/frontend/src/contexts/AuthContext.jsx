import { useState, useContext, createContext } from "react";


const AuthContext = createContext();

function AuthProvider( { children }){
    const [ user, setUser ] = useState( null);
    const [ token, setToken] = useState( null);

    const login = (userData, userToken) => {
        setUser(userData);
        setToken(userToken);
        console.log('Login!');
    } 

    const logout = () =>{
        setUser(null);
        setToken(null);
    }

    return (
        //           pasamos los estados y las funciones
        <AuthContext.Provider  value={ {user, token, login, logout} } >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }