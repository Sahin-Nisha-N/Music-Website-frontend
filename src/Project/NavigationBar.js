import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeProj from './HomeProj';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Header from './Header'; 
import Register from './Register';
import Profile from './Profile'; 

export default function NavigationBar() {
    return (
        <div>
            <Header /> 
            <Routes>
                <Route exact path="/" element={<HomeProj />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}
