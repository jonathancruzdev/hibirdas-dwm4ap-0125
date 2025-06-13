import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const UsersABM = () =>{
    const HOST = 'http://127.0.0.1:3000/api';
    const [ users, setUsers] = useState([]);

    const { login, user} = useContext(AuthContext);

    const navigate= useNavigate();

    async function getUsers () {
        try {
            const response = await fetch(`${HOST}/users`);
            const data = await response.json()
            console.log(data);
            setUsers( data);
        } catch (error) {
            alert('Tenemos un error en el Servidor');
            console.error(error)
        }

    }

   // getUsers();

    return (
        <>
            <header>
                <h1> 😀 ABM de Usuarios</h1>
            </header>
            <main>
                <button onClick={ () => { login()} }>Login</button>
                <button onClick={getUsers} type="button"> Get Users</button>
                <h2>Lista de usuarios</h2>
                <ul>
                    {
                        users.map( user => 
                        <li key={user._id}> { user.name}
                           {/*  <button onClick={ () => {  navigate( `/details/${user._id}` ) } }> Ver </button> */}
                            <Link to={`/details/${user._id}`}> Ver </Link> 
                        </li>)
                    }
                    
                </ul>

            </main>

        </>
    )

}

export default UsersABM