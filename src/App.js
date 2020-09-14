import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
//import SpotifyWebApi from '../bower_components/spotify-web-api-js/src/spotify-web-api.js';
//import SpotifyWebApi from 'spotify-web-api-js';
//import '../../spotify-web-api-js-master/spotify-web-api-js-master/src/spotify-web-api.js';



function App() {
//  const client_id = "639db5cc638f46aeb796d411a8f4de45";
//  const client_secret = "b392e37deb804c08a6e56e613b9e3884";
//  const redirect_uri = "http://timetospotify.vercel.app";
//  const id = "43ZHCT0cAZBISjO8DG9PnE";
  const accessToken = "BQByKvFA1XdB6wz2D3AYoiguZumFQaEvVGEEa3uXF_H45sg28GyLqEXw7tlVmVtvuDChDv7Gj25uW9iDZ_raoQH1sdQBqrIrPMtCjFGiarDEMmS2CqVXPo1mgm7RIGbdd5E-4RKTJvqCUA";
  //const duration = "9";

  const [items, setItems] = useState('');
  const [items2, setItems2] = useState('');
  const [items3, setItems3] = useState('');
  const [items4, setItems4] = useState('');
  const [items5, setItems5] = useState('');
  const [dur0, setDur0] = useState(0);
  const [dur1, setDur1] = useState(0);
  const [dur2, setDur2] = useState(0);
  const [dur3, setDur3] = useState(0)
  const [dur4, setDur4] = useState(0);
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
                             setItems5(results.tracks.items[4].name)
                             setDur0(results.tracks.items[0].duration_ms)
                             setDur1(results.tracks.items[1].duration_ms)
                             setDur2(results.tracks.items[2].duration_ms)
                             setDur3(results.tracks.items[3].duration_ms)
                             setDur4(results.tracks.items[4].duration_ms)})
        })
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

//const handleSubmit = (event) => {
//  alert('Name submited with hooks: ' + name);
//  event.preventDefault();
//}

  return (
    <main>
      <h1>Time to Spotify</h1>
      <h2>A timer using the lengths of songs</h2>
      <p>Choose a genre:</p>
      <select onChange = {handleChange}>
        <option value="pop">Pop</option>
        <option value="hip%20hip">Hip Hop</option>
        <option value="classical">Classical</option>
        <option value="edm">EDM</option>
      </select>
      <h2> Results </h2>
      <p>Track 1 name: {items} </p>
      <p>Track 1 duration: {Math.floor(dur0/60000)} min {parseFloat((dur0/60000 %1)*60).toFixed(1)} sec</p>
      <br />
      <p>Track 2 name: {items2} </p>
      <p>Track 2 duration: {Math.floor(dur1/60000)} min {parseFloat((dur1/60000 %1)*60).toFixed(1)} sec</p>
      <br />
      <p>Track 3 name: {items3} </p>
      <p>Track 3 duration: {Math.floor(dur2/60000)} min {parseFloat((dur2/60000 %1)*60).toFixed(1)} sec</p>
      <br />
      <p>Track 4 name: {items4} </p>
      <p>Track 4 duration: {Math.floor(dur3/60000)} min {parseFloat((dur3/60000 %1)*60).toFixed(1)} sec</p>
      <br />
      <p>Track 5 name: {items5} </p>
      <p>Track 5 duration: {Math.floor(dur4/60000)} min {parseFloat((dur4/60000 %1)*60).toFixed(1)} sec</p>
      <br />
      <h2> Total duration: {Math.floor((dur0+dur1+dur2+dur3+dur4)/60000)} min {parseFloat(((dur0+dur1+dur2+dur3+dur4)/60000 %1)*60).toFixed(1)} sec</h2>
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
