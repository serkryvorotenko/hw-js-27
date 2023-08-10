import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const ListPhotos = () => {
    const params = useParams();
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.id}`)
            .then((response) => response.json())
            .then((json) => setPhotos(json));
    }, [])

    return (
        <div>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <h3>
                            Name photo: {photo.title}
                            <img src={photo.url}/>
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )

}
