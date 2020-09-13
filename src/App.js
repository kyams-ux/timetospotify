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
  const accessToken = "BQDyIevWpxOeKrb6UBN8vvC-cLZ_oB1SrU08ONpWNuNcqlPK72kPin09xsSioxKet_70bXZv-hAdAeTxAu8dpY97jftpYcc9VczWowhRzjQM7GMNdof7AQbKT2N_FGBwErpPz0YXdRP-Pg";
  const duration = "7";

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/tracks/0t1kP63rueHleOhQkYSXFY",{
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(res => res.json())
            .then((result) => {
              setItems(result.name);
            })
        },[])
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
     <form>
       <label>
       Genre:
       <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
          </select>
       </label>
       <input type="submit" value="Submit" />
     </form>
      <p>Track name: {items}</p>
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
