const UsersABM = () =>{

    let users = [];

    async function getUsers () {
        const response = await fetch('http://127.0.0.1:3000/api/users');
        const data = await response.json()
        console.log(data);

        users = data;
    }


    return (
        <>
            <header>
                <h1> ABM de Usuarios</h1>
            </header>
            <main>
                <button onClick={getUsers} type="button"> Get Users</button>
                <h2>Lista de usuarios</h2>
                <ul>
                    {
                        users.map( user => <li> { user.name} </li>)
                    }
                    
                </ul>
            </main>

        </>
    )

}

export default UsersABM