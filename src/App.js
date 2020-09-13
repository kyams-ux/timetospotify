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
  const accessToken = "BQAdGhYP_PxAPwHktDFz9HLrtWhwcADQR4GgQ7_WWuF6Rwq-bz2qHBGBpmtCDHRuH-ZiZ6_H5HHOqyzVO1XNTxy02R0VRDQXpRUn62qmU7mTp73Sh0UMTfWy7iR5Nsu0tCCqSACrngmThQ";
  const duration = "9";

  const [items, setItems] = useState('');
  const [items2, setItems2] = useState('');
  const [items3, setItems3] = useState('');
  const [items4, setItems4] = useState('');
  const [dur0, setDur0] = useState(0);
  const [genre, setGenre] = useState("pop");

  useEffect(() => {
    fetch('https://api.spotify.com/v1/search?q=genre:'+genre+'&type=track',{
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(res => res.json())
            .then(results => {setItems(results.tracks.items[0].name)
                             setItems2(results.tracks.items[1].name)
                             setItems3(results.tracks.items[2].name)
                             setItems4(results.tracks.items[3].name)
                             setDur0(results.tracks.items[0].duration_ms)})
            .then(console.log(items))
              .then(result => console.log(result.tracks.items[0].name) )
            .then(console.log('items: 1'))
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
      <p>Choose a genre:</p>
      <select onChange = {handleChange}>
        <option value="pop">Pop</option>
        <option value="hip%20hip">Hip Hop</option>
        <option value="classical">Classical</option>
        <option value="EDM">EDM</option>
      </select>
      <h2> Results </h2>
      <p>Track 1 name: {items} </p>
      <p>Track 1 duration: {Math.floor(dur0/60000)} min {parseFloat((dur0/60000 %1)*60).toFixed(1)} sec</p>
      <br />
      <p>Track 2 name: {items2} </p>
      <p>Track 3 name: {items3} </p>
      <p>Track 4 name: {items4} </p>
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
