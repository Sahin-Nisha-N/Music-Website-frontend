import React from 'react';

const About = () => {
    const mainStyle = {
        backgroundColor: "#0A183D",  // Updated to include the new background color
        padding: "40px",
        color: "black",  // Adjusted text color for better contrast
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
    };

    const sectionStyles = {
        marginBottom: "40px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const subheadingStyle = {
        color: "#26709a",
        fontSize: "1.8em",
        marginBottom: "10px",
    };

    const listItemStyle = {
        marginBottom: "10px",
    };

    return (
        <div style={mainStyle}>
            <section style={{ ...sectionStyles, backgroundColor: "#EFEFEF" }}>
                <h3 style={subheadingStyle}>About Us</h3>
                <p>
                    Welcome to MUSIC WORLD, your ultimate destination for all things music! We are passionate music enthusiasts dedicated to bringing you the latest news, reviews, and insights from the vibrant world of music.
                </p>
            </section>

            <section style={{ ...sectionStyles, backgroundColor: "#FAFAFA" }}>
                <h3 style={subheadingStyle}>Our Mission</h3>
                <p>
                    Our mission is to empower music lovers to explore, enjoy, and engage with their favorite sounds by providing a dynamic and comprehensive platform for all things music. We aim to simplify the process of discovering new artists, staying updated on music trends, and connecting with a community of fellow enthusiasts.
                </p>
            </section>

            <section style={{ ...sectionStyles, backgroundColor: "#F0F0F0" }}>
                <h3 style={subheadingStyle}>What We Offer</h3>
                <ul>
                    <li style={listItemStyle}><strong>Music News:</strong> Stay informed with the latest updates in the music industry, including new album releases, concert tours, and exclusive artist interviews.</li>
                    <li style={listItemStyle}><strong>Reviews:</strong> Get expert opinions on the latest tracks, albums, and live performances, helping you decide what to listen to next.</li>
                    <li style={listItemStyle}><strong>Features:</strong> Dive deeper into the music world with in-depth articles that explore the stories behind the songs, spotlight emerging artists, and celebrate the legends.</li>
                    <li style={listItemStyle}><strong>Playlists:</strong> Discover curated playlists for every mood and occasion, created by our team of music aficionados.</li>
                    <li style={listItemStyle}><strong>Community Engagement:</strong> Connect with other music fans, share your favorite tunes, and participate in lively discussions on our forums and social media channels.</li>
                </ul>
            </section>

            <section style={{ ...sectionStyles, backgroundColor: "#E6E6E6" }}>
                <h3 style={subheadingStyle}>Our Team</h3>
                <p>
                    Our team consists of musicians, critics, and passionate music lovers dedicated to bringing you the best music content. With diverse backgrounds and a shared love for all genres, we work together to provide a platform that resonates with every music fan.
                </p>
            </section>

            <section style={{ ...sectionStyles, backgroundColor: "#F5F5F5" }}>
                <h3 style={subheadingStyle}>Join Us</h3>
                <p>
                    Start your musical journey with Music World today. Explore our features, stay updated on your favorite artists, and connect with a community of music enthusiasts. Let’s make every moment a musical adventure!
                </p>
            </section>
        </div>
    );
}

export default About;
