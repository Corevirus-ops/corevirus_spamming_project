import react, {useState, useEffect} from 'react'
import PlaylistTool from './PlaylistTool.jsx';

//playlist component wholesale style
function Playlist({stageSong, clearStage, setStage}) {
    const [playlist, setPlaylist] = useState([]);

    function handleCreatePlaylist(e) {
      let newName = e.target.previousSibling.value
/*
        setPlaylist(prevArray => [...prevArray,    { 
            name: e.target.previousSibling.value,
            songs: stageSong,
           }]);
           */

setPlaylist(prevArray => {
  const playlistExists = prevArray.find(playlist => playlist.name === newName);

  if (!playlistExists) {
    return [...prevArray,    { 
            name: newName,
            songs: stageSong,
           }]
  } else {
    alert('This new name does not work or already exist')
    return prevArray;
  }
});

clearStage();

    }


    function handleRemoveFromStaged(index) {
            setStage((prevArray) =>
      prevArray.filter((_, id) => id !== index)
    );

    }

    function handlePlaylistNameChange(oldName, newName) {
      setPlaylist(prevArray => {
  const playlistExists = prevArray.find(playlist => playlist.name === newName);

  if (!playlistExists ) {
    return prevArray.map(playlist =>
        playlist.name === oldName
          ? { ...playlist, name: newName }
          : playlist
    );
  } else {
    alert('This new name does not work or already exist')
    return prevArray;
  }
});

    }

        function handleAddToList(playlistName) {
          stageSong.map(track => {
                setPlaylist(prevArray =>
      prevArray.map(playlist =>
        playlist.name === playlistName
          ? { ...playlist, songs: [...playlist.songs, track]}
          : playlist
      )
    );
            
          })
//used to clear stage after its no longer needed
    clearStage();

    }

       function handleRemoveSong(oldName, indexToRemove) {
            setPlaylist(prevArray =>
      prevArray.map(playlist =>
        playlist.name === oldName
          ? { ...playlist, songs: playlist.songs.filter((_, i) => i !== indexToRemove)
           }
          : playlist
      )
    );
    }

    function handleDeletePlaylist(name) {
                  setPlaylist(prevArray =>
      prevArray.filter(playlist =>
        playlist.name !== name)
    );
    }



   
    return (
        <>
        <PlaylistTool CreatePlaylist={handleCreatePlaylist} playlist={playlist} stagedSongs={stageSong} removeStaged={handleRemoveFromStaged} nameChange={handlePlaylistNameChange} removeSong={handleRemoveSong} removePlaylist={handleDeletePlaylist} addToList={handleAddToList}/>
        
        </>
    )




}

export default Playlist