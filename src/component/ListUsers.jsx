import React, {useState, useEffect} from "react";
import {Link, Outlet} from "react-router-dom";

export const ListUsers = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, [])

    const onUserAlbum = (userId) => {
        setUsers(users.filter(user => user.id === userId))
    }

    const onUserPhotos = (userId) => {
        setUsers(users.filter(user => user.id === userId))
    }


    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h3>
                            Name : {user.name}
                        </h3>
                        <p>userName : {user.username}</p>
                        <p>Email : {user.email}</p>
                        <p>Phone : {user.phone}</p>
                        <Link to={'/ListUsers/Album/' + user.id}>Album</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}