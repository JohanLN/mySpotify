import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';
import HomeSideBar from '../home/HomeSideBar';
import HomeHeader from '../home/HomeHeader';

class TrackInfos extends React.Component {

    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    displayOtherTrackOfArtist(topTracksPrev) {
        if ((Object.keys(topTracksPrev).length <= 0)) {
            return null;
        }

        const topTracks = topTracksPrev.tracks;
        const list = topTracks.map(topTrack => (
            <div onClick={() => {
                this.props.selectedTrack(this.props.user.access_token, topTrack.id)
                this.props.history.push("/Home/Search/TrackInfos/"+topTrack.id)
            }} style={{display: 'flex', flexDirection: 'column', width: "15%", backgroundColor: 'rgba(18, 18, 18, 78%)', borderRadius: 5, padding: 10, marginLeft: "2%"}}>
                <img src={topTrack.album.images[0].url} alt={topTrack.name} style={{width: "100%", alignSelf: 'center', borderRadius: 5}} />
                <p style={{color:"white", fontSize: 14, fontWeight: 'bold'}}>{topTrack.name}</p>
            </div>
        ))
        return (list);
    }

    componentWillUnmount() {
        this.props.clearSlectedTrack()
    }

    render() {

        const track = this.props.user.selectedTrack;
        const topTracks = this.props.user.artistAlbum;

        if (Object.keys(track).length > 0 && Object.keys(topTracks).length <= 0)
            this.props.getAtistAlbums(this.props.user.access_token, this.props.user.selectedTrack.artists[0].id)

        return (
            <div className="TrackInfos" style={{display: 'flex', flexDirection: 'row', minHeight: "100vh",}}>
                <HomeSideBar props={this.props} />

                <HomeHeader props={this.props} />

                {Object.keys(track).length <= 0 ? null :
                    <div style={{backgroundColor: 'rgba(22, 22, 22, 78%)', width: "90%", marginLeft: "10%", paddingTop: "8%", display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', flexDirection: 'row', width: "90%", marginLeft: "2%", paddingBottom: "3%", borderBottom: "1px solid white"}}>
                            <img src={track.album.images[0].url} alt={track.name} style={{width: "20%"}} />
                            <div style={{marginLeft: "5%", marginTop: "2%"}}>
                                <p style={{color: 'white', fontSize: 15}}>{track.album.album_type}</p>
                                <p style={{color: 'white', fontSize: 60, fontWeight: 'bold'}}>{track.name}</p>
                                <p style={{color: 'white', fontSize: 30}}>{track.artists[0].name}{track.artists[1] ? ", "+track.artists[1].name : null}</p>
                            </div>
                            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: "25%"}}>
                                <h1 style={{color: 'white', fontSize: 15}}>Music duration : {this.millisToMinutesAndSeconds(track.duration_ms)}</h1>
                                <h1 style={{color: 'white', fontSize: 15}}>Release date : {track.album.release_date}</h1>
                                {track.artists.length > 1 ? 
                                    <h1 style={{color: 'white', fontSize: 15}}>Featuring : {track.artists[1].name}</h1> 
                                    : 
                                    null
                                }
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: "2%", height: "40%", width: "90%", paddingBottom: "3%", borderBottom: "1px solid white"}}>
                            <h1 style={{color: 'white', fontSize: 30}}>More of {track.artists[0].name}</h1>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                {this.displayOtherTrackOfArtist(topTracks, track)}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
  };
  
  export default connect (mapStateToProps, actions)(TrackInfos);