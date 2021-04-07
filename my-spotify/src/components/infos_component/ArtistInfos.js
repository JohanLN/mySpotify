import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';
import HomeSideBar from '../home/HomeSideBar';
import HomeHeader from '../home/HomeHeader';

class ArtistInfos extends React.Component {

    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    displayGenres(genres) {
        const list = genres.map(genre => (
            <p style={{color: 'white', fontSize: 15}}>{genre}</p>
        ));
        return(list);
    }

    displayPopularSongs(popularSongs) {
        if (Object.keys(popularSongs).length <= 0 || popularSongs.length <= 0 || popularSongs === undefined) {
            return null;
        }
        const list = popularSongs.map(popularSong => (
            <div onClick={() => {
                this.props.selectedTrack(this.props.user.access_token ,popularSong.id)
                this.props.history.push("/Home/Search/TrackInfos/"+popularSong.id)
            }} style={{display: 'flex', flexDirection: 'row', width: "90%", padding: "1%", margin: "1%", justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(22, 22, 22, 78%)'}}>
                <img src={popularSong.album.images[0].url} alt={popularSong.name} style={{width: "10%"}} />
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2%', width: '10%'}}>
                    <p style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{popularSong.name}</p>
                    <p style={{color: 'white'}}>{popularSong.artists[0].name}</p>
                </div>
                <p style={{ width: '10%', textAlign: 'center', color: 'white'}}>{popularSong.album.name}</p>
                <p style={{width: '10%', textAlign: 'center', color: 'white'}}>{this.millisToMinutesAndSeconds(popularSong.duration_ms)}</p>
            </div>
        ))
        return (list);
    }

    render () {
        
        if (this.props.user.access_token === "" ||this.props.user.access_token === undefined) {
            this.props.history.push("/");
            window.location.reload(false);
        }

        const artist = this.props.user.selectedArtist;

        return (

            <div className="TrackInfos" style={{display: 'flex', flexDirection: 'row', minHeight: "100vh"}}>
                <HomeSideBar props={this.props} />

                <HomeHeader props={this.props} />

                {Object.keys(artist).length <= 0 ? null :
                    <div style={{backgroundColor: 'rgba(22, 22, 22, 78%)', width: "90%", marginLeft: "10%", paddingTop: "6%", display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', flexDirection: 'row', width: "90%", marginLeft: "2%", paddingBottom: "3%", borderBottom: "1px solid white"}}>
                            <img src={artist.artistData.images[0].url} alt={artist.artistData.name} style={{height: 400, borderRadius: "100%"}} />
                            <div style={{marginLeft: "5%", marginTop: "2%"}}>
                                <p style={{color: 'white', fontSize: 15}}>{artist.artistData.type}</p>
                                <p style={{color: 'white', fontSize: 60, fontWeight: 'bold'}}>{artist.artistData.name}</p>
                                <p style={{color: 'white', fontSize: 30}}>{artist.artistData.followers.total} followers</p>   
                            </div>
                            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: "25%"}}>
                                <p style={{color: 'white', fontSize: 30}}>Genres</p>
                                {this.displayGenres(artist.artistData.genres)}
                            </div>
                        </div>
                        <h1 style={{color: 'white', fontSize: 30, marginLeft: "2%"}}>Popular songs of {artist.artistData.name}</h1>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: "2%"}}>
                            {this.displayPopularSongs(artist.artistTracks.tracks)}
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
  
  export default connect (mapStateToProps, actions)(ArtistInfos);