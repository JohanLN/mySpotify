import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';
import HomeSideBar from './HomeSideBar';
import HomeHeader from './HomeHeader';

class Home extends React.Component {

    displayUserPlaylist(userPlaylist) {
        const list = userPlaylist.map(playlist => (
            <div onClick={() => console.log(playlist.name)} style={{display: 'flex', flexDirection: 'column', width: "13%", backgroundColor: 'rgba(18, 18, 18, 78%)', borderRadius: 5, padding: 10, marginLeft: "1%"}}>
                <img src={playlist.images[0].url} alt={playlist.name} style={{width: "70%", height: "70%", borderRadius: 100, alignSelf: 'center'}} />
                <p style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>{playlist.name}</p>
            </div>
        ));
        return (list);
    }

    displayUserRecentlyPlayed(userRecentlyPlayed) {
        const list = userRecentlyPlayed.map(recentTrack => (
            <div onClick={() => console.log(recentTrack.track.name)} style={{display: 'flex', flexDirection: 'column', width: "13%", backgroundColor: 'rgba(18, 18, 18, 78%)', borderRadius: 5, padding: 10, marginLeft: "1%"}}>
                <p style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>{recentTrack.track.name}</p>
                <img src={recentTrack.track.album.images[0].url} alt={recentTrack.track.name} style={{width: "70%", height: "70%", alignSelf: 'center'}} />
                <p style={{color: 'white', fontSize: 17}}>{recentTrack.track.artists[0].name}</p>
            </div>
        ));
        return (list);
    }

    componentDidMount() {
        if (this.props.user.access_token === "")
            this.props.history.push("/");
    }

    render() {

        const userPlaylist = this.props.user.userPlaylistData.items;
        const userRecentlyPlayed = this.props.user.userRecentlyPlayed.items;

        return (
            <div className="Home" style={{display: 'flex', flexDirection: 'row', minHeight: "100vh"}}>
                
                <HomeSideBar props={this.props} />

                <HomeHeader props={this.props} />
                <div id="body" style={{backgroundColor: 'rgba(22, 22, 22, 78%)', minHeight: "100vh", width: "90%", marginLeft: "10%", display: 'flex', flexDirection: 'column', paddingTop: "5%"}}>
                    <div style={{height: "45%", display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: "5%"}}>
                        <p style={{color: 'white', fontSize: 30, fontWeight: 'bold', height: "10%", width: "80%", borderBottom: "1px solid white"}}>User's playlists</p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            {this.displayUserPlaylist(userPlaylist)}
                        </div>
                    </div>
                    <div style={{height: "45%", marginLeft: "5%"}}>
                        <p style={{color: 'white', fontSize: 30, fontWeight: 'bold', height: "10%", width: "80%", borderBottom: "1px solid white"}}>Recently played by {this.props.user.userData.display_name}</p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            {this.displayUserRecentlyPlayed(userRecentlyPlayed)}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return state
  };
  
  export default connect (mapStateToProps, actions)(Home);