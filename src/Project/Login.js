import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const containerStyle = {
        padding: '20px',
        maxWidth: '400px',
        margin: '50px auto', 
        textAlign: 'center',
        backgroundColor: '#0A183D', 
        color: '#fff', 
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '20px',
    };

    const inputStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#fff', 
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#fc0254',
        color: '#fff',
        cursor: 'pointer',
        marginTop: '10px',
    };

    document.body.style.backgroundColor = '#0A183D';

    return (
        <div style={containerStyle}>
            <h2>Login</h2>
            <form style={formStyle}>
                <input type="email" placeholder="Email" style={inputStyle} />
                <input type="password" placeholder="Password" style={inputStyle} />
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
            <p style={{ marginTop: '20px' }}>Don't have an account? <Link to="/register" style={{ color: '#fc0254' }}>Sign up</Link></p>
        </div>
    );
}

export default Login;
