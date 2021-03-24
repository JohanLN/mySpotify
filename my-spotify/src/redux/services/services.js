import { spotifyCredentials } from "../constants/spotifyCredentials";

const scopes = [
    "user-read-private",
    "user-read-email"
]

export const signIn = () => {
    return(
        "https://accounts.spotify.com/authorize?client_id=" +
        spotifyCredentials.CLIENT_ID +
        "&redirect_uri=" + 
        spotifyCredentials.REDIRECT_URI + 
        "&scope=" + scopes.join("%20") +
        "&response_type=token&show_dialog=true"
    );
};

export const getTokenFromURL = (dispatch) => { 
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        console.log("response ? ", initial);
        return initial;
      }, {});
  };
  
