import { useParams } from "react-router-dom"

function  UserDetails() {

    const { id } = useParams();
    //  Fetch a la API GeT con el Id

    return (
        <>
            <h1>Detalles del Usuario { id}</h1>
        </>
    )
}

export default UserDetails