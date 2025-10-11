import { useState, useEffect } from 'react'


import SearchBar from './components/SearchBar/Index.jsx';
import Playlist from './components/Playlist/Index.jsx';
import Login from './Login.jsx';
import {getToken} from './Auth.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

function App() {
  const [stagedSong, setStagedSong] = useState([]);
  //get url params for auth
  const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

//checks if code changes then gets our token automatically
useEffect(() => {
  if (code) {
  getToken(code);
  }
}, [code])


  function handleStageSong(data) {
    setStagedSong((prevItems) => [...prevItems, data]);

  }

  //clears stage when uses by playlist function
  function handleClearStageSong() {
setStagedSong([]);
  }



  return (
    <>
    <Container className="d-flex justify-content-center align-items-center ">

    <h1 className='header'>JaMMMing</h1>
</Container>
{ code ? ( <>
        <Playlist stageSong={stagedSong} clearStage={handleClearStageSong} setStage={setStagedSong} /> 
    <SearchBar stageSong={handleStageSong}/> </>) : <Login  /> }
        </>
  )
}

export default App
