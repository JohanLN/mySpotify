import React from 'react';
import { connect } from 'react-redux';
import { AccountCircle } from '@material-ui/icons';
import * as actions from '../../redux/actions/userActions';
import HomeSideBar from '../home/HomeSideBar';
import HomeHeader from '../home/HomeHeader';

class Profile extends React.Component {

    displayTopArtists(artists) {
        const list = artists.map(artist => (
            <div style={{display: 'flex', flexDirection: 'column', width: "13%", backgroundColor: 'rgba(18, 18, 18, 78%)', borderRadius: 5, padding: 10, marginLeft: "2%"}}>
                <img src={artist.images[0].url} alt={artist.name} style={{width: "50%", height: "50%", borderRadius: 100, alignSelf: 'center'}} />
                <p style={{color:"white", fontSize: 19, fontWeight: 'bold'}}>{artist.name}</p>
                <p style={{color: 'white'}}>{artist.genres[0]}</p>
            </div>
        ))
        return (list);
    }

    displayTopTracks(tracks) {
        const list = tracks.map(track => (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "79%", backgroundColor: 'rgba(18, 18, 18, 78%)', borderRadius: 5, padding: 10, marginLeft: "2%", marginBottom: "1%"}}>
                <div style={{display: 'flex', flexDirection: 'row', width: "15%"}}>
                    <img src={track.album.images[0].url} alt={track.name} style={{width: "40%"}} />
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: "5%"}}>
                        <p style={{color: 'white'}}>{track.name}</p>
                        <p style={{color: '#969696'}}>{track.name}</p>
                    </div>
                </div>
                <p style={{color: "#969696"}}>{track.name}</p>
                <p style={{color: "#969696"}}>{track.album.album_type}</p>
            </div>
        ))
        return (list);
    }

    displayUserPlaylist(userPlaylist) {
        const list = userPlaylist.map(playlist => (
            <div style={{display: 'flex', flexDirection: 'column', width: "13%", backgroundColor: 'rgba(18, 18, 18, 78%)', borderRadius: 5, padding: 10, marginLeft: "2%"}}>
                <img src={playlist.images[0].url} alt={playlist.name} style={{width: "70%", height: "70%", borderRadius: 100, alignSelf: 'center'}} />
                <p style={{color:"white", fontSize: 19, fontWeight: 'bold'}}>{playlist.name}</p>
        </div>
        ));
        return (list);
    }

    render() {

        console.log("Profile",this.props.user.userDataTops.tracks)

        const artists = this.props.user.userDataTops.artists.items;
        const tracks = this.props.user.userDataTops.tracks.items;
        const userPlaylist = this.props.user.userPlaylistData.items;


        return (

            <div className="Profile" style={{display: 'flex', flexDirection: 'row', minHeight: "100vh"}}>
                <HomeSideBar props={this.props} />

                <HomeHeader props={this.props} />

                <div id="ProfileBody" style={{backgroundColor: 'rgba(22, 22, 22, 78%)', width: "90%", minHeight: "100vh", marginLeft: "10%", paddingTop: "8%", display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <AccountCircle style={{fontSize: 400}} color="primary" />
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <p style={{color: '#969696', fontSize: 20}}>Profile</p>
                            <p style={{color: 'white', fontSize: 80, fontWeight: 'bold'}}>{this.props.user.userData.display_name}</p>
                            <p style={{color: '#969696', fontSize: 20}}>{this.props.user.userPlaylistData.items.length} public playlists</p>
                        </div>
                    </div>
                    <p style={{color: 'white', fontSize: 30, fontWeight: 'bold', height: "10%", width: "80%", borderBottom: "1px solid white", marginLeft: "2%"}}>Top artists</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {this.displayTopArtists(artists)}
                    </div>
                    <p style={{color: 'white', fontSize: 30, fontWeight: 'bold', height: "10%", width: "80%", borderBottom: "1px solid white", marginLeft: "2%"}}>Top tracks</p>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {this.displayTopTracks(tracks)}
                    </div>
                    <p style={{color: 'white', fontSize: 30, fontWeight: 'bold', height: "10%", width: "80%", borderBottom: "1px solid white", marginLeft: "2%"}}>User's playlists</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {this.displayUserPlaylist(userPlaylist)}
                    </div>
                </div>
            </div>

        )

    }
}

const mapStateToProps = (state) => {
    return state
  };
  
  export default connect (mapStateToProps, actions)(Profile);