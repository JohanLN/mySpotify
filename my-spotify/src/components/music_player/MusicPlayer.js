import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';
import HomeSideBar from '../home/HomeSideBar';
import HomeHeader from '../home/HomeHeader';

class MusicPlayer extends React.Component {
    render() {
        if (this.props.user.access_token === "" ||this.props.user.access_token === undefined) {
            this.props.history.push("/");
            window.location.reload(false);
        }
        return (
            <div className="MusicPlayer" style={{display: 'flex', flexDirection: 'row', height: "100vh"}}>
                <HomeSideBar props={this.props} />

                <HomeHeader props={this.props} />
                <div className="MusicPlayer" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(22, 22, 22, 78%)', justifyContent: 'center', width: "90%", marginLeft: "10%", paddingTop: "6%"}}>
                    <p style={{textAlign: 'center', fontSize: 100, fontWeight: 'bold', color: 'white'}}>Work in progress</p>
                </div>
            </div>
        );    
    }
}

const mapStateToProps = (state) => {
    return state
  };
  
  export default connect (mapStateToProps, actions)(MusicPlayer);