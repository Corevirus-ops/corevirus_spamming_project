import react, {useState, useEffect} from 'react'
import PlaylistTool from './PlaylistTool.jsx';

function Playlist({stageSong, clearStage, setStage}) {
    const [playlist, setPlaylist] = useState([]);

    function handleCreatePlaylist(e) {

        setPlaylist(prevArray => [...prevArray,    { 
            name: e.target.previousSibling.value,
            songs: stageSong,
           }]);

clearStage();

    }


    function handleRemoveFromStaged(index) {
            setStage((prevArray) =>
      prevArray.filter((_, id) => id !== index)
    );

    }

    function handlePlaylistNameChange(oldName, newName) {
    setPlaylist(prevArray =>
      prevArray.map(playlist =>
        playlist.name === oldName
          ? { ...playlist, name: newName }
          : playlist
      )
    );

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