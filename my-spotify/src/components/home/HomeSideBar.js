import React from 'react';
import Logo from "../../resources/spotify_logo_white.png"
import { Button } from '@material-ui/core';
import { Home, Search, List, PlayCircleFilled } from '@material-ui/icons'

class HomeSideBar extends React.Component {

    render() {

        return (

            <div id="sideBar" style={{backgroundColor: 'black', minHeight: "100vh", width: "10%", position: 'fixed'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 50, paddingBottom: 50, borderBottom: '1px solid white'}}>
                    <img src={Logo} alt="Logo" style={{width: "20%", height: "30%"}}/>
                    <h1 style={{color: 'white'}}>mySpotify</h1>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: 300, borderBottom: '1px solid white'}}>
                    <Button onClick={() => {
                        if (this.props.props.history.location.pathname !== "/Home") {
                            this.props.props.history.push("/Home")
                        }
                    }} variant="text" color='primary' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: "100%"}}>
                        <Home style={{fontSize: 40}} color="primary"/>
                        Home
                    </Button>
                    <Button onClick={() => {
                        if (this.props.props.history.location.pathname !== "/Home/Search") {
                            this.props.props.history.push("/Home/Search")
                        }
                    }} variant="text" color='primary' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: "100%"}}>
                        <Search style={{fontSize: 40}} color="primary"/>
                        Search
                    </Button>
                    <Button variant="text" color='primary' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: "100%"}}>
                        <List style={{fontSize: 40}} color="primary"/>
                        Playlists
                    </Button>
                </div>
                <Button onClick={() => {
                        if (this.props.props.history.location.pathname !== "/Home/MusicPlayer") {
                            this.props.props.history.push("/Home/MusicPlayer")
                        }
                    }} variant="text" color='primary' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: "100%", marginTop: 750}}>
                    <PlayCircleFilled style={{fontSize: 40}} color="primary"/>
                        Player
                </Button>
            </div>

        )

    }

}

export default HomeSideBar;