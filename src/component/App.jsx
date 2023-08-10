import React from "react";
import {ListUsers} from "./ListUsers.jsx";
import {Routes, Route, Link} from "react-router-dom";
import {ListAlbum} from "./Album.jsx";
import {ListPhotos} from "./Photos.jsx"

export class App extends React.Component {


    render() {
        return (
            <main>
                <nav>
                    <Link to="/ListUsers">List Users</Link>
                </nav>
                <Routes>
                    <Route path="/ListUsers" element={<ListUsers/>}></Route>
                    <Route path="/ListUsers/Album/:id" element={<ListAlbum/>}></Route>
                    <Route path="/ListUsers/Album/Photos/:id" element={<ListPhotos/>}></Route>
                </Routes>

            </main>

        )
    }
}
