import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/app/Home';
import MusicPlayer from './components/music_player/MusicPlayer';
import Welcome from './components/app/Welcome';

const Root = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Home/MusicPlayer" component={MusicPlayer} />
            </Switch>
        </Router>
    );
}

export default Root;