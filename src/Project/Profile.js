import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../asserts/images/profileImage.png'; // Import your local image

const Profile = () => {
    const containerStyle = {
        display: 'flex',
        padding: '20px',
        maxWidth: '1200px',
        margin: '50px auto',
        backgroundColor: '#0A183D',
        color: '#fff',
        borderRadius: '10px',
    };

    const sidebarStyle = {
        width: '250px',
        padding: '20px',
        backgroundColor: '#08192D',
        borderRadius: '10px',
        marginRight: '20px',
    };

    const sidebarLinkStyle = {
        display: 'block',
        color: '#fc0254',
        textDecoration: 'none',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'left',
        backgroundColor: 'transparent',
    };

    const mainContentStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    };

    const profileHeaderStyle = {
        textAlign: 'center',
        position: 'relative', 
        marginBottom: '20px',
    };

    const circleImageContainerStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        overflow: 'hidden', 
        margin: '0 auto', 
        marginBottom: '10px', 
        border: '2px solid #fff',
    };

    const circleImageStyle = {
        width: '100%', 
        height: 'auto',
        display: 'block', 
    };

    const headingStyle = {
        fontSize: '2em',
        marginBottom: '10px',
        color: '#fc0254',
    };

    const infoStyle = {
        fontSize: '1.2em',
        marginBottom: '10px',
    };

    const sectionStyle = {
        backgroundColor: '#0A183D',
        borderRadius: '10px',
        padding: '20px',
    };

    const sectionHeadingStyle = {
        fontSize: '1.5em',
        color: '#fc0254',
        marginBottom: '10px',
    };

    const listStyle = {
        listStyleType: 'none',
        padding: 0,
    };

    const listItemStyle = {
        padding: '10px',
        borderBottom: '1px solid #ccc',
    };

    document.body.style.backgroundColor = '#0A183D';

    return (
        <div style={containerStyle}>
            <aside style={sidebarStyle}>
                <h2 style={{ color: '#fff' }}>Dashboard</h2>
                <Link to="/artists" style={sidebarLinkStyle}>Artists</Link>
                <Link to="/albums" style={sidebarLinkStyle}>Albums</Link>
                <Link to="/playlists" style={sidebarLinkStyle}>Playlists</Link>
                <Link to="/settings" style={sidebarLinkStyle}>Settings</Link>
                <Link to="/logout" style={sidebarLinkStyle}>Logout</Link>
            </aside>
            <div style={mainContentStyle}>
                <div style={profileHeaderStyle}>
                    <div style={circleImageContainerStyle}>
                        <img 
                            src={profileImage} // Use the imported image
                            alt="Profile" 
                            style={circleImageStyle} 
                        />
                    </div>
                    <h1 style={headingStyle}>Sahin Nisha</h1>
                    <p style={infoStyle}>sahinnisha@gmail.com</p>
                </div>

                <div style={sectionStyle}>
                    <h3 style={sectionHeadingStyle}>Favorite Genres</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Melody</li>
                        <li style={listItemStyle}>Folk</li>
                        <li style={listItemStyle}>Classical</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h3 style={sectionHeadingStyle}>Playlists</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Ilaiyaraaja Classics</li>
                        <li style={listItemStyle}>A. R. Rahman Hits</li>
                        <li style={listItemStyle}>Anirudh's Latest</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h3 style={sectionHeadingStyle}>Recent Activity</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Liked "Nenjukkul Peidhidum" by Harris Jayaraj</li>
                        <li style={listItemStyle}>Added "Rowdy Baby" to Folk Favorites</li>
                        <li style={listItemStyle}>Started following Yuvan Shankar Raja</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
