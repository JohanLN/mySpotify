import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';
import HomeSideBar from '../home/HomeSideBar';
import HomeHeader from '../home/HomeHeader';
import Moment from 'react-moment';

class PlaylistInfos extends React.Component {

    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    displayPlaylistContent(playlist) {
        const tracks = playlist.tracks.items;
        console.log(tracks[0])
        const list = tracks.map(track => (
            <div onClick={() => {
                this.props.selectedTrack(this.props.user.access_token ,track.track.id)
                this.props.history.push("/Home/Search/TrackInfos/"+track.track.id)
            }} style={{display: 'flex', flexDirection: 'row', width: "90%", padding: "1%", margin: "1%", justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(22, 22, 22, 78%)'}}>
                <img src={track.track.album.images[0].url} alt={track.track.name} style={{width: "10%"}} />
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2%', width: '10%'}}>
                    <p style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{track.track.name}</p>
                    <p style={{color: 'white'}}>{track.track.artists[0].name}</p>
                </div>
                <p style={{ width: '10%', textAlign: 'center', color: 'white'}}>{track.track.album.name}</p>
                <Moment style={{width: '10%', textAlign: 'center', color: 'white'}} fromNow>{track.added_at}</Moment>
                <p style={{width: '10%', textAlign: 'center', color: 'white'}}>{this.millisToMinutesAndSeconds(track.track.duration_ms)}</p>
            </div>
        ));
        return (list);
    }

    render () {

        if (this.props.user.access_token === "" ||this.props.user.access_token === undefined) {
            this.props.history.push("/");
            window.location.reload(false);
        }
        const playlist = this.props.user.selectedPlaylist;

        return(
            <div className="TrackInfos" style={{display: 'flex', flexDirection: 'row', minHeight: "100vh"}}>
                <HomeSideBar props={this.props} />

                <HomeHeader props={this.props} />

                {Object.keys(playlist).length <= 0 ? null :
                    <div style={{backgroundColor: 'rgba(22, 22, 22, 78%)', width: "90%", marginLeft: "10%", paddingTop: "5%", display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', flexDirection: 'row', width: "90%", marginLeft: "2%", paddingBottom: "3%", borderBottom: "1px solid white"}}>
                            <img src={playlist.images[0].url} alt={playlist.name} style={{width: "20%"}} />
                            <div style={{marginLeft: "5%", marginTop: "2%"}}>
                                <p style={{color: 'white', fontSize: 15}}>Playlist</p>
                                <p style={{color: 'white', fontSize: 60, fontWeight: 'bold'}}>{playlist.name}</p>
                                <p style={{color: 'white', fontSize: 30}}>{playlist.owner.display_name}</p>   
                            </div>
                        </div>
                        <h1 style={{color: 'white', fontSize: 30, marginLeft: "2%"}}>Content of {playlist.name}</h1>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: "2%"}}>
                            {this.displayPlaylistContent(playlist)}
                        </div>
                    </div>
                }
            </div>
        );

    };

};


const mapStateToProps = (state) => {
    return state
  };
  
  export default connect (mapStateToProps, actions)(PlaylistInfos);