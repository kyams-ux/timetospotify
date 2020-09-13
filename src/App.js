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
  const accessToken = "BQAazLJSkSGGVcJMX0I8cMjDNjFKxd-VRv8m0NZ24VtTtRvTyoHQ9zKP8TCoTT2ybIQLqZAtPWVqQNTWFKlJuqedq9C1EoQ-f8Oc6cFJOILbHTnoByCbIYesQICa_tGc_G4pN7Kn3cnCqg";
  const duration = "8";

  const [items, setItems] = useState([]);
  const [genre, setGenre] = useState('');

  useEffect(() => {
    fetch("https://api.spotify.com/v1/search?q=genre:pop&type=track",{
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(res => res.json())
            .then((result) => {
              setItems(result.tracks[0].items.name);
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

  const handleChange = (event) => {
  setGenre(event.target.value);
}

const handleSubmit = (event) => {
  alert('Name submited with hooks: ' + name);
  event.preventDefault();
}

  return (
    <main>
      <h1>Time to Spotify</h1>
      <h2>A timer using the lengths of songs</h2>
      <p>Track 1: {duration}</p>
     <form>
       <label>
       Genre:
       <select onChange={handleChange}>
          <option value="pop">Pop</option>
          <option value="edm">EDM</option>
          <option selected value="hip%20hop">Hip Hop</option>
          <option value="latin">Latin</option>
          </select>
       </label>
       <input type="submit" value="Submit" />
     </form>
      <p>Track name: {items}</p>
      <p>Genre: {genre}</p>
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
