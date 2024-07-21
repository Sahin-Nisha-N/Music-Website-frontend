import React from 'react';
import { Link } from 'react-router-dom';
import logoo from "../asserts/images/logoo.png";
import profile from "../asserts/images/profile.png";

export default function Header() {
    const mainStyle = {
        backgroundColor: "#08192D",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
    };

    const logoTitleContainerStyle = {
        display: "flex",
        alignItems: "center",
    };

    const logostyle = {
        height: "50px",
        width: "50px",
    };

    const headerStyle = {
        color: "white",
        fontFamily: "Arial Black",
        paddingLeft: "15px", 
        fontSize: "30px",
        marginTop: "5px",
    };

    const navStyle = {
        display: "flex",
        gap: "20px",
        alignItems: "center",
    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "16px",
    };

    const profileStyle = {
        height: "30px",
        width: "30px",
        borderRadius: "50%",
    };

    return (
        <div style={mainStyle}>
            <div style={logoTitleContainerStyle}>
                <img src={logoo} alt="logo" style={logostyle} />
                <h1 style={headerStyle}>Music World</h1>
            </div>
            <div style={navStyle}>
                <Link to="/" style={linkStyle}>HOME</Link>
                <Link to="/about" style={linkStyle}>ABOUT</Link>
                <Link to="/contact" style={linkStyle}>CONTACT</Link>
                <Link to="/login" style={linkStyle}>LOGIN</Link>
                <Link to="/profile">
                    <img src={profile} alt="profile" style={profileStyle} />
                </Link>
            </div>
        </div>
    );
}
