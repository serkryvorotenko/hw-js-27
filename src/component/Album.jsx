import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const ListAlbum = () => {
    const params = useParams();
    const [album, setAlbum] = useState([])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${params.id}`)
            .then((response) => response.json())
            .then((json) => setAlbum(json));
    }, [])


    return (
        <div>
            <ul>
                {album.map(photo => (
                    <li key={photo.id}>
                        <h3>
                            Title Album : {photo.title} <br/>
                            <Link to={'/ListUsers/Album/Photos/' + photo.id}>Photo</Link>
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

