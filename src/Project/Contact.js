import React from 'react';

const Contact = () => {

    const containerStyle = {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'center',
        color:"#fff",
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
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#fc0254',
        color: 'white',
        cursor: 'pointer',
        marginTop: '10px',
    };

    return (
        <div style={containerStyle}>
            <h2>Contact Us</h2>
            <p>We'd love to hear your musical thoughts and ideas!!!</p>

            <form style={formStyle}>
                <input type="text" placeholder="Your Name" style={inputStyle} />
                <input type="email" placeholder="Your Email" style={inputStyle} />
                <textarea placeholder="Your Message" style={{ ...inputStyle, height: '100px' }}></textarea>
                <button type="submit" style={buttonStyle}>Send Message</button>
            </form>
        </div>
    );
}

export default Contact;