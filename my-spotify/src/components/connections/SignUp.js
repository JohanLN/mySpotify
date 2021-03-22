import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SignUp = () => {

    return (
        <div className="SignUp" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'yellow'}}>
            <h1>SignUp Page</h1>

            <Link to="/Home" style={{width: "45%", textDecoration: 'none'}}>
                <Button variant="contained" color="primary">
                    Sign up
                </Button>
            </Link>
        </div>
    );
}

export default SignUp;