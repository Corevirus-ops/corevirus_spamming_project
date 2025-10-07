import react, {useState, useEffect} from 'react'
import PlaylistTool from './PlaylistTool.jsx';
import './Playlist.css';

function Playlist() {
    const [playlist, setPlaylist] = useState([]);

    function handleCreatePlaylist(e) {

        setPlaylist(prevArray => [...prevArray,    { 
            id: playlist.length + 1,
            name: e.target.previousSibling.value,
            songs: [],
           }]);

    }


    useEffect(() => {

    }, [playlist])

   
    return (
        <>
        <PlaylistTool CreatePlaylist={handleCreatePlaylist} />
        </>
    )




}

export default Playlist