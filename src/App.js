import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromResponse } from "./resources/spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    // hide token in url
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) setToken(_token);
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
