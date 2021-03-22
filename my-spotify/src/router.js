import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/app/App';
import SignIn from './components/connections/SignIn';
import SignUp from './components/connections/SignUp';
import Home from './components/app/Home';
import MusicPlayer from './components/music_player/MusicPlayer';

const Root = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/SignIn" component={SignIn} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Home/MusicPlayer" component={MusicPlayer} />
            </Switch>
        </Router>
    );
}

export default Root;