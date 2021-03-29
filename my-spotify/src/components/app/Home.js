import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    displayUserPlaylist(userPlaylist) {
        const list = userPlaylist.map(playlist => (
            <div onClick={() => console.log(playlist.name)} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 200}}>
                <img src={playlist.images[0].url} alt={playlist.name} style={{width: 120, height: 120}} />
                <p style={{textAlign: 'center'}}>{playlist.name}</p>
            </div>
        ));
        return (list);
    }

    displayUserRecentlyPlayed(userRecentlyPlayed) {
        const list = userRecentlyPlayed.map(recentTrack => (
            <div onClick={() => console.log(recentTrack.track.name)} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 200}}>
                <p style={{fontWeight: 'bold', fontSize: 19, textAlign: 'center'}}>{recentTrack.track.name}</p>
                <img src={recentTrack.track.album.images[0].url} alt={recentTrack.track.name} style={{width: 120, height: 120}} />
                <p style={{textAlign: 'center'}}>{recentTrack.track.artists[0].name}</p>
            </div>
        ));
        return (list);
    }

    displaySearchedTracks(search) {
        if (Object.keys(search).length <= 0) {
            return null;
        }
        const searches = search.tracks.items;
        const list = searches.map(track => (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 50, marginBottom: 50, marginLeft: 200}}>
                <img src={track.album.images[0].url} alt={track.name} style={{width: 120, height: 120}} />
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: 100}}>
                    <p>{track.name}</p>
                    <p>{track.artists[0].name}</p>
                </div>
            </div>
        ))
        return (list);
    }

    componentDidMount() {
        if (this.props.user.access_token === "")
            this.props.history.push("/");
    }

    render() {

        const userPlaylist = this.props.user.userPlaylistData.items;
        const userRecentlyPlayed = this.props.user.userRecentlyPlayed.items;
        const searches = this.props.user.searches;

        return (
            <div className="Home" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'pink'}}>
                <h1>Home Page</h1>
                <Link to="/Home/MusicPlayer" style={{width: "45%", textDecoration: 'none'}}>
                    <Button variant="contained" color="primary">
                        Music player
                    </Button>
                </Link>
                <h2>User's playlists :</h2>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    {this.displayUserPlaylist(userPlaylist)}
                </div><h2>Recently play by {this.props.user.userData.display_name} :</h2>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    {this.displayUserRecentlyPlayed(userRecentlyPlayed)}
                </div>
                <div style={{alignSelf: 'center', width: "50%"}}>
                    <Input placeholder="Search for tracks" color="primary" onChange={(text) => {
                        this.setState({search: text.target.value})
                        this.props.searchTrack(this.props.user.access_token, this.state.search)
                    }} style={{width: "100%", backgroundColor: 'white'}}/>
                    {this.displaySearchedTracks(searches)}
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
  };
  
  export default connect (mapStateToProps, actions)(Home);