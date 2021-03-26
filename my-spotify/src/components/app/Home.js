import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';

class Home extends React.Component {
    render() {
        return (
            <div className="Home" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'pink'}}>
                <h1>Home Page</h1>
                <Link to="/Home/MusicPlayer" style={{width: "45%", textDecoration: 'none'}}>
                    <Button variant="contained" color="primary">
                        Music player
                    </Button>
                </Link>
                <h2>Access token = {this.props.user.access_token}</h2>
            </div>
        );    
    }
}

const mapStateToProps=(state)=>{
    return state
  };
  
  export default connect (mapStateToProps, actions)(Home);