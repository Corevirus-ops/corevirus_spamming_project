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


    useEffect(() => {

    }, [playlist, stageSong])

   
    return (
        <>
        <PlaylistTool CreatePlaylist={handleCreatePlaylist} playlist={playlist} stagedSongs={stageSong} removeStaged={handleRemoveFromStaged} />
        </>
    )




}

export default Playlist