import { useState } from "react";
import { useNavigate } from "react-router-dom"

const UserLogin = () =>{
    const HOST = 'http://127.0.0.1:3000/api';

    const [ user, setUser] = useState({email: '', password: ''});

    const navigate = useNavigate();

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

            const response = await fetch(`${HOST}/users/auth`, options);
            const data = await response.json();
            console.log( data);
            //navigate('/users')

        } catch (error) {
            alert('Tenemos un error al loguear el usuario');
        }
    }

    return (
        <>
            <header>
                <h1> Login</h1>
            </header>
            <main>
                <hr />
                <form onSubmit={postUser}>

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

export default UserLogin