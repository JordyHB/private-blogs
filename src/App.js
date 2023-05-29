import React, {useState} from 'react';
import './App.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import BlogOverview from "./pages/blogoverview/BlogOverview";
import Blogpost from "./pages/blogpost/Blogpost";
import Navbar from "./components/Navbar/Navbar";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    const navigate = useNavigate()

    async function updateStatus() {
        // Have to extract and store the state in a variable before updating because updating takes too long
        const tempState = !isAuthenticated
        toggleIsAuthenticated(tempState)
        // sends you to blog posts or the home screen depending on whether youre logging in or out
        tempState ? navigate('/blogposts') : navigate('/')
    }

    return (
        <>
            <Navbar loggedIn={ isAuthenticated } updateStatus={updateStatus}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login updateStatus={updateStatus}/>}/>
                {/*Ternary checks whether user is allowed on routes*/}
                <Route path="/blogposts" element={isAuthenticated ? <BlogOverview/> : <Navigate  to="/" />} />
                <Route path="/blogposts/:id" element={ isAuthenticated ? <Blogpost/> : <Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;