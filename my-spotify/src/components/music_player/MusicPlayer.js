import React from 'react';
import "./MusicPlayer.css"
import logo from '../../resources/pochette1.png'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Button, IconButton } from '@material-ui/core';

const MusicPlayer = (props) => {

    return (
        <div className="MusicPlayer" >
            <h1>MusicPlayer Page</h1>
            <img className="logoPicture" src={logo} alt="Track picture"/>
                 <div className="PlayerBar">
                 <Button  className="skip-btn" onClick={() => props.SkipSong(false)}>
                    <SkipPreviousIcon style={{ fontSize: 100}}/>
                </Button>
                <Button  className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                    <PlayCircleOutlineIcon  style={{ fontSize: 100}}/>
                </Button>
                <Button  className="skip-btn" onClick={() => props.SkipSong()}>
                    <SkipNextIcon style={{ fontSize: 100}}/>
                </Button>
                 </div>
        </div>
    );
}

{/* <IconButton color="primary" style={{paddingLeft: 50}} onClick={() => {console.log("yoooooo")}}> */}

export default MusicPlayer;

// import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions/userActions';

// class MusicPlayer extends React.Component {
//     render() {
//         if (this.props.user.access_token === "" ||this.props.user.access_token === undefined) {
//             this.props.history.push("/");
//             window.location.reload(false);
//         }
//         return (
//             <div className="MusicPlayer" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'green'}}>
//                 <h1>MusicPlayer Page</h1>
//                 <h2>access_token = {this.props.user.access_token}</h2>
//             </div>
//         );    
//     }
// }

// const mapStateToProps = (state) => {
//     return state
//   };
  
//   export default connect (mapStateToProps, actions)(MusicPlayer);