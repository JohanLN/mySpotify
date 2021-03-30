import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MusicPlayer from './components/music_player/MusicPlayer';
import Welcome from './components/app/Welcome';
import Profile from './components/user_profile/Profile';
import Search from './components/search/Search';

const Root = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Home/Search" component={Search} />
                <Route exact path="/Home/MusicPlayer" component={MusicPlayer} />
            </Switch>
        </Router>
    );
}

export default Root;