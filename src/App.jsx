import { useState } from 'react'


import SearchBar from './components/SearchBar/Index.jsx';
import Playlist from './components/Playlist/Index.jsx';
function App() {
  const [stagedSong, setStagedSong] = useState([]);
  function handleStageSong(data) {
    setStagedSong((prevItems) => [...prevItems, data]);
  }


  return (
    <>
    <section className='Container'>
    <h1 className='header'>Jammming</h1>

        <Playlist />
    <SearchBar stageSong={handleStageSong}/>

    </section>


      

    <footer></footer>
        </>
  )
}

export default App
