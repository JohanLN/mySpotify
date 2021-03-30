import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';

class MusicPlayer extends React.Component {
    render() {
        if (this.props.user.access_token === "" ||this.props.user.access_token === undefined) {
            this.props.history.push("/");
            window.location.reload(false);
        }
        return (
            <div className="MusicPlayer" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'green'}}>
                <h1>MusicPlayer Page</h1>
                <h2>access_token = {this.props.user.access_token}</h2>
            </div>
        );    
    }
}

const mapStateToProps = (state) => {
    return state
  };
  
  export default connect (mapStateToProps, actions)(MusicPlayer);