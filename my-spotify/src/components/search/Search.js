import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';
import HomeSideBar from '../home/HomeSideBar';
import HomeHeader from '../home/HomeHeader';
import { Input } from '@material-ui/core';

class Search extends React.Component {

    displaySearchedTracks(search) {
        if (Object.keys(search).length <= 0) {
            return null;
        }
        const searches = search.tracks.items;
        const list = searches.map(track => (
            <div onClick={() => {
                this.props.selectedTrack(this.props.user.access_token ,track.id)
                this.props.history.push("/Home/Search/TrackInfos/"+track.id)
            }} style={{display: 'flex', flexDirection: 'row', height: "2%", margin: "2%", paddingBottom: "2%", borderBottom: "1px solid white"}}>
                <img src={track.album.images[0].url} alt={track.name} style={{height: "100%"}} />
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: 100}}>
                    <h1 style={{color: 'white'}}>{track.name}</h1>
                    <p style={{color: 'white', fontStyle: 'italic', fontSize: 15}}>{track.artists[0].name}</p>
                </div>
            </div>
        ))
        return (list);
    }

    render() {

        if (this.props.user.access_token === "" ||this.props.user.access_token === undefined) {
            this.props.history.push("/");
            window.location.reload(false);
        }
        const searches = this.props.user.searches;

        return (
            <div className="Search" style={{display: 'flex', flexDirection: 'row', minHeight: "100vh"}}>
                <HomeSideBar props={this.props} />

                <HomeHeader props={this.props} />

                <div style={{backgroundColor: 'rgba(22, 22, 22, 78%)', width: "90%", marginLeft: "10%", display: 'flex', flexDirection: 'column'}}>
                    <div style={{alignSelf: 'center', width: "50%", position: 'fixed', marginTop: "1%"}}>
                        <Input placeholder="Search for tracks" onChange={(text) => {
                            this.setState({search: text.target.value})
                            this.props.searchTrack(this.props.user.access_token, text.target.value)
                        }} style={{width: "100%", backgroundColor: 'white', borderRadius: 50, padding: 10}}/>
                    </div>
                    <div style={{marginTop: "5%", display: 'flex', flexDirection: 'column'}}>
                        {this.displaySearchedTracks(searches)}
                    </div>           
                </div>
            </div>

        )

    }
}


const mapStateToProps = (state) => {
    return state
  };
  
  export default connect (mapStateToProps, actions)(Search);