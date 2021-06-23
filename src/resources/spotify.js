export const authEndpoint = "https://accounts.spotify.com/authorize";

// spotify redirects here after successful login
const redirectURI = "http://localhost:3000/";
const clientID = process.env.REACT_APP_SPOTIFY_CLIENTID;

const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURI(parts[1]);
      return initial;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
