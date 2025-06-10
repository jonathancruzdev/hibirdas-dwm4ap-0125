import { useState } from "react";

const UserCreate = () =>{
    const HOST = 'http://127.0.0.1:3000/api';

    const [ user, setUser] = useState({name: '', email: '', password: ''});

    function handlerChange( event ) {
        const clave = event.target.name;
        const value = event.target.value;
        setUser( {...user, [clave]: value} )
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


   // getUsers();

    return (
        <>
            <header>
                <h1> Crear Usuario</h1>
            </header>
            <main>

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

export default UserCreate