import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
//import SpotifyWebApi from '../bower_components/spotify-web-api-js/src/spotify-web-api.js';
//import SpotifyWebApi from 'spotify-web-api-js';
//import '../../spotify-web-api-js-master/spotify-web-api-js-master/src/spotify-web-api.js';



function App() {

  const client_id = "639db5cc638f46aeb796d411a8f4de45";
  const client_secret = "b392e37deb804c08a6e56e613b9e3884";
  const redirect_uri = "http://timetospotify.vercel.app";
  const id = "43ZHCT0cAZBISjO8DG9PnE";
  const accessToken = "BQCCuRgVuOzpHLJSlMQcoz25UY6rPxHj9CQVgIkSzs_nUYKlQ1cOaQ0QHfLFri2nOAEsYrryZZPaM6hJE7LT1AsiTYIMn26tFy2cM7fcuQ0DSYvHo1RUwzjeb0tC7SVz8NrqvY55ab2BZA";
  const duration = "5";

  fetch('https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(function(response){ duration = "6";}
            );
  //var SpotifyWebApi = require('spotify-web-api-js');
  //var spotifyApi = new SpotifyWebApi();
// var spotifyApi = new SpotifyWebApi();
 // spotifyApi.setAccessToken(auth);
 // spotifyApi.searchTracks('Love').then(
 //   function (data) {
 //      length = data.tracks[0].duration_ms;
 //     console.log('Search by "Love"', data);
 //   },
 //   function (err) {
 //     console.error(err);
 //   }

  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <main>
      <h1>Time to Spotify</h1>
      <h2>A timer using the lengths of songs</h2>
      <p>Track 1: {duration}</p>
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
      <br />
      <p> A work in progress by{' '}
        <a href="https://www.instagram.com/kaleandyams/">
        Kayla
        </a>
      </p>
    </main>
  );
}

export default App;
