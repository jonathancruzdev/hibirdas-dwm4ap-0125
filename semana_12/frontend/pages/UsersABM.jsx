import { useState } from "react";

const UsersABM = () =>{
    const HOST = 'http://127.0.0.1:3000/api';

    const [ users, setUsers] = useState([]);
    const [ user, setUser] = useState({name: 'josé', email: '', password: ''});

    function handlerChange( event ) {
        const clave = event.target.name;
        const value = event.target.value;
        /* console.log( clave)
        const data = { [clave]: value };    
        console.log(data);
 */
        setUser( {...user, [clave]: value} )
        
       // console.log(user)
    }

    async function postUser(event) {
        event.preventDefault();
        try {
            const options = {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(user)
            }

            console.log(options)

            const response = await fetch(`${HOST}/users`, options);
            const data = await response.json();
            console.log( data);
        } catch (error) {
            alert('Tenemos un error al Registrar el usuario');
        }
    }

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
                <button onClick={getUsers} type="button"> Get Users</button>
                <h2>Lista de usuarios</h2>
                <ul>
                    {
                        users.map( user => <li key={user._id}> { user.name} </li>)
                    }
                    
                </ul>
                <hr />
                <h2>Nuevo Usuario</h2>
                <form onSubmit={postUser}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        name="name"
                        value={user.name}
                        onChange={ handlerChange } 
                        type="text"
                        minLength={3} 
                    />

                    <label htmlFor="name">Email</label>
                    <input
                        name="email"
                        type="email" 
                        value={user.email}
                        onChange={ handlerChange } 
                    />

                    <label htmlFor="name">password</label>
                    <input 
                        name="password"
                        value={user.password}
                        onChange={ handlerChange}
                        type="password" />

                    <button type="submit">Guardar</button>
                </form>
            </main>

        </>
    )

}

export default UsersABM