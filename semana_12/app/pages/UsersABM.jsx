import { useState } from "react";

const UsersABM = () =>{

    const [ users, setUsers] = useState([]);
    const [ user, setUser] = useState({name: '', email: '', password: ''});


    async function getUsers () {
        const response = await fetch('http://127.0.0.1:3000/api/users');
        const data = await response.json()
        console.log(data);

        setUsers( data);
    }


    return (
        <>
            <header>
                <h1> 😀 ABM de Usuarios</h1>
            </header>
            <main>
                <button onClick={getUsers} type="button"> Get Users</button>
                <h2>Lista de usuarios</h2>
                <ul>
                    {
                        users.map( user => <li key={user._id}> { user.name} </li>)
                    }
                    
                </ul>
                <hr />
                <h2>Nuevo Usuario</h2>
                <form>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" />

                    <label htmlFor="name">Email</label>
                    <input type="email" />

                    <label htmlFor="name">password</label>
                    <input type="password" />

                    <button type="submit">Guardar</button>
                </form>
            </main>

        </>
    )

}

export default UsersABM