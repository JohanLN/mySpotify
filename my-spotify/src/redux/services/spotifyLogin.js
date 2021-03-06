import { spotifyConst } from "../constants/constants";

const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "user-read-recently-played",
    "user-top-read"
]

export const signIn = () => {
    return(
        "https://accounts.spotify.com/authorize?client_id=" +
        spotifyConst.CLIENT_ID +
        "&redirect_uri=" + 
        spotifyConst.REDIRECT_URI + 
        "&scope=" + scopes.join("%20") +
        "&response_type=token&show_dialog=true"
    );
};
