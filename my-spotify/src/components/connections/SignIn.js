import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SignIn = () => {

    return (
        <div className="SignIn" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'grey'}}>
            <h1>SignIn Page</h1>

            <Link to="/Home" style={{width: "45%", textDecoration: 'none'}}>
                <Button variant="contained" color="primary">
                    Sign in
                </Button>
            </Link>
        </div>
    );
}

export default SignIn;