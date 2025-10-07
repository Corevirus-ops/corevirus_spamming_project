import react, {useState, useEffect} from 'react'
import PlaylistTool from './PlaylistTool.jsx';

function Playlist({stageSong, clearStage}) {
    const [playlist, setPlaylist] = useState([]);

    function handleCreatePlaylist(e) {

        setPlaylist(prevArray => [...prevArray,    { 
            name: e.target.previousSibling.value,
            songs: [stageSong],
           }]);

clearStage();

    }


    useEffect(() => {

    }, [playlist])

   
    return (
        <>
        <PlaylistTool CreatePlaylist={handleCreatePlaylist} playlist={playlist} stagedSongs={stageSong} />
        </>
    )




}

export default Playlist