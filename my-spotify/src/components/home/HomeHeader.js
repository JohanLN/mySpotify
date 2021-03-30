import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Button } from '@material-ui/core';

class HomeHeader extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          selection: false
        }
    }

    _signOut() {
        this.props.props.signOut();
        this.props.props.history.push("/");
        window.location.reload(false);
    }

    render() {

        return (

            <div style={{height: "7%", alignItems: 'center', marginLeft: "10%", width: "90%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgba(60, 60, 60, 100%)', position: 'fixed'}}>
                <p style={{color: 'white', fontSize: 40, fontWeight: 'bold', marginLeft: "5%"}}>Hello !</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "13%"}}>
                    <Button onClick={() => {this.setState({selection: !this.state.selection})}} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: "80%", height: 38, fontWeight: 'bold', color: "white", backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 50}}>
                        <AccountCircle style={{fontSize: 40}} color="primary" />
                        <h4 style={{fontSize: 10}}>{this.props.props.user.userData.display_name}</h4>
                    </Button>
                </div>
                {this.state.selection ? 
                    <div style={{display:'flex', flexDirection:'column', position:"fixed", top: "5%", right: "2.7%", width: "8.5%", backgroundColor:"white"}}>
                    <Button variant="text" onClick={() => this.props.props.history.push("/Profile")} style={{borderBottom: "1px solid grey"}}>
                        Profile
                    </Button>
                    <Button variant="text" onClick={() => this._signOut()}>
                        Log out
                    </Button>
                    </div>
                    : 
                    null
                }
            </div>

        )

    }

}

export default HomeHeader