import { useState, useEffect } from 'react'


import SearchBar from './components/SearchBar/Index.jsx';
import Playlist from './components/Playlist/Index.jsx';
import Login from './Login.jsx';
import {getToken} from './Auth.js';

function App() {
  const [stagedSong, setStagedSong] = useState([]);
  


  const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

useEffect(() => {
  if (code) {
  getToken(code);
  }
}, [code])


  function handleStageSong(data) {
    setStagedSong((prevItems) => [...prevItems, data]);

  }

  function handleClearStageSong() {
setStagedSong([]);
  }



  return (
    <>
    <section className='Container'>
    <h1 className='header'>Jammming</h1>

{ code ? ( <>
        <Playlist stageSong={stagedSong} clearStage={handleClearStageSong} setStage={setStagedSong} /> 
    <SearchBar stageSong={handleStageSong}/> </>) : <Login  /> }

    </section>


      

    <footer></footer>
        </>
  )
}

export default App
