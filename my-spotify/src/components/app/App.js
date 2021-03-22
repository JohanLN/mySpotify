import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/actions/counterActions';
import { Link } from 'react-router-dom';
import Logo from "../../resources/spotify_logo_white.png"
import Pic1 from '../../resources/pochette1.png'
import Pic2 from '../../resources/pochette2.jpg'
import Pic3 from '../../resources/pochette3.jpg'

const App = () => {

  const counter = useSelector(state => state.counterReducers);
  const dispatch = useDispatch();

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', backgroundColor: "#FFAF65"}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center'}}>
        <h1 style={{color: 'white'}}>mySpotify</h1>
        <img src={Logo} alt="Logo" style={{width: "3%", height: "3%"}}/>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "10%"}}>
          <Link to="/SignIn" style={{width: "45%", textDecoration: 'none'}}>
            <Button variant="outlined" style={{width: "100%", fontWeight: 'bold', color: "white", borderColor: 'white', borderRadius: 50, borderWidth: 3}}>
              Sign In
            </Button>
          </Link>
          <Link to="/SignUp" style={{width: "45%", textDecoration: 'none'}}>
            <Button variant="contained" style={{width: "100%", borderRadius: 50, color: 'black', fontWeight: 'bold', backgroundColor: "white"}}>
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
      <h1 style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 84}}>Looking for some music ?</h1>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'white', width: "70%", height: 900, alignSelf: 'center'}}>
        <h1 style={{textAlign: 'center', fontSize: 48, fontWeight: 'bold'}}>Try mySpotify web player ...</h1>
        <Link to="/Home" style={{width: "40%", textDecoration: 'none'}}>
          <Button variant="outlined" style={{width: "100%", color: "#FFAF65", borderWidth: 3, borderColor: "#FFAF65", borderRadius: 50, fontWeight: "bold", fontSize: 24}}>
            Launch the player !
          </Button>
        </Link>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: "100%"}}>
          <img src={Pic1} alt="Pic1" style={{width: "20%", height: "100%"}}/>
          <img src={Pic2} alt="Pic2" style={{width: "20%"}}/>
          <img src={Pic3} alt="Pic3" style={{width: "20%"}}/>
        </div>
      </div>
      <div style={{backgroundColor: 'black', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: 200}}>
        <h2 style={{color: 'white'}}>Counter = {counter}</h2>
        <Button variant="contained" color="primary" onClick={() => dispatch(increment(1))}>+</Button>
        <Button variant="contained" color="primary" onClick={() => dispatch(decrement(1))}>-</Button>
      </div>  
    </div>
  );
}

export default App;
