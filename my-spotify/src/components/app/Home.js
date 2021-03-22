import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Home = () => {

    return (
        <div className="Home" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'pink'}}>
            <h1>Home Page</h1>

            <Link to="/Home/MusicPlayer" style={{width: "45%", textDecoration: 'none'}}>
                <Button variant="contained" color="primary">
                    Music player
                </Button>
            </Link>

        </div>
    );

}

export default Home;