import React from 'react';
import { Button } from '@material-ui/core';
import Logo from "../../resources/spotify_logo_white.png"
import Pic1 from '../../resources/pochette1.png'
import Pic2 from '../../resources/pochette2.jpg'
import Pic3 from '../../resources/pochette3.jpg'
import { signIn } from '../../redux/services/spotifyLogin';
import { connect } from 'react-redux';
import { AccountCircle } from '@material-ui/icons';
import * as actions from '../../redux/actions/userActions';

class Welcome extends React.Component {

  componentDidMount() {
    if (window.location.hash !== "") {
        this.props.getTokenFromURL();
        window.location.hash = "";
    }
  };

  componentDidUpdate() {
    if (this.props.user.access_token !== "" && this.props.user.userData.display_name === undefined) {
      this.props.getUser(this.props.user.access_token);
    }
  }

  _signOut() {
    this.props.signOut();
    this.props.history.push("/");
    window.location.reload(false);
  }

  render() {
    console.log(this.props.user)
    return (
      <div className="Welcome" style={{display: 'flex', flexDirection: 'column', backgroundColor: "#FFAF65"}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center'}}>
          <h1 style={{color: 'white'}}>mySpotify</h1>
          <img src={Logo} alt="Logo" style={{width: "3%", height: "3%"}}/>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "10%"}}>
            {this.props.user.access_token !== "" ? 
              <Button onClick={() => {this._signOut()}} variant="outlined" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: "80%", height: 38, fontWeight: 'bold', color: "white", borderColor: 'white', borderRadius: 50, borderWidth: 3}}>
                <AccountCircle style={{fontSize: 40}} color="primary" />
                <h4 style={{fontSize: 10}}>{this.props.user.userData.display_name}</h4>
              </Button>
                :
              <Button href={signIn()} variant="outlined" style={{width: "80%", fontWeight: 'bold', color: "white", borderColor: 'white', borderRadius: 50, borderWidth: 3}}>
                Sign In
              </Button>
            }
          </div>
        </div>
        <h1 style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 84}}>Looking for some music ?</h1>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'white', width: "70%", height: 900, alignSelf: 'center'}}>
          <h1 style={{textAlign: 'center', fontSize: 48, fontWeight: 'bold'}}>Try mySpotify web player ...</h1>
            {this.props.user.access_token !== "" ? 
              <Button onClick={() => this.props.history.push("/Home")} variant="outlined" style={{width: "40%", color: "#FFAF65", borderWidth: 3, borderColor: "#FFAF65", borderRadius: 50, fontWeight: "bold", fontSize: 24}}>
                Launch the player !
              </Button>
              :
              <Button href={signIn()} variant="outlined" style={{width: "40%", color: "#FFAF65", borderWidth: 3, borderColor: "#FFAF65", borderRadius: 50, fontWeight: "bold", fontSize: 24}}>
                Launch the player !
              </Button>
            }
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: "100%"}}>
            <img src={Pic1} alt="Pic1" style={{width: "20%", height: "100%"}}/>
            <img src={Pic2} alt="Pic2" style={{width: "20%"}}/>
            <img src={Pic3} alt="Pic3" style={{width: "20%"}}/>
          </div>
        </div>
        <div style={{backgroundColor: 'black', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: 200}}>
          <h2 style={{color:"white"}}>About and things like that !</h2>
        </div>
      </div>
    );  
  }
};

const mapStateToProps=(state)=>{
  return state
};

export default connect (mapStateToProps, actions)(Welcome);