import React, {useState} from 'react';
import {CookiesProvider, useCookies} from "react-cookie";
import {Button, ButtonGroup, TextField} from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// @ts-ignore
import {createBrowserRouter, BrowserRouter as Router, Routes, Route, Link, RouterProvider, Switch} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact"
import News from "./Components/News/News"



function App() {

    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <Home/>
    //     },
    //     {
    //         path: '/contact',
    //         element: <Contact/>
    //     },
    //     {
    //         path: '/news',
    //         element: <News/>
    //     }
    // ])


    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<News/>}/>
            </Routes>
        </div>
    );
}

export default App;
