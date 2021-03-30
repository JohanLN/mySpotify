import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MusicPlayer from './components/music_player/MusicPlayer';
import Welcome from './components/app/Welcome';
import Profile from './components/user_profile/Profile';
import Search from './components/search/Search';
import TrackInfos from './components/infos_component/TrackInfos';
import PlaylistInfos from './components/infos_component/PlaylistInfos';
import ArtistInfos from './components/infos_component/ArtistInfos';

const Root = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Home/Search" component={Search} />
                <Route exact path="/Home/MusicPlayer" component={MusicPlayer} />
                <Route path="/Home/Search/TrackInfos/:id" component={TrackInfos} />
                <Route path="/Home/Search/PlaylistInfos/:id" component={PlaylistInfos} />
                <Route path="/Home/Search/ArtistInfos/:id" component={ArtistInfos} />
            </Switch>
        </Router>
    );
}

export default Root;