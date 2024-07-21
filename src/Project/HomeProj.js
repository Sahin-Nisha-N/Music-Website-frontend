import React from 'react';
import bgimage from '../asserts/images/bgimage.png'; 
const Home = () => {
    const sectionStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        color: 'white',
        textAlign: 'left',
        padding: '0 15px',
        backgroundColor: '#0A183D', 
    };

    const textContainerStyle = {
        flex: 1,
        padding: '20px',
    };

    const imageContainerStyle = {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    };

    const imageStyle = {
        height: '80%', 
        objectFit: 'contain',
    };

    const TextStyle = {
        color: '#fc0254', 
        fontSize: '5rem',
    };

    return (
        <div style={sectionStyle}>
            <div style={textContainerStyle}>
                <h1>
                    <span style={TextStyle}>Music</span>  for Everyone
                </h1>
                <h1>
                    <span style={TextStyle}>Listen</span>  to Music
                </h1>
            </div>
            <div style={imageContainerStyle}>
                <img src={bgimage} alt="background" style={imageStyle} />
            </div>
        </div>
    );
}

export default Home;
