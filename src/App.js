import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromResponse } from "./resources/spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(async () => {
    const hash = getTokenFromResponse();
    // hide token in url
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
       setToken(_token);
       spotify.setAccessToken(_token)
       const userAccount = await spotify.getMe()
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player />: <Login />}
    </div>
  );
}

export default App;
