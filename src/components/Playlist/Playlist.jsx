import react, {useState, useEffect} from 'react'

function Playlist() {
    const [playlist, setPlaylist] = useState([]);

    function handleCreatePlaylist(e) {

        setPlaylist(prevArray => [...prevArray,    { 
            id: playlist.length + 1,
            name: e.target.previousSibling.value,
            songs: [],
           }]);

    }

    function handleAddSong(e) {
        playlist.map(item => item[e.target.nextSibling.value] == item.name ? item.songs.push("Once Upon A Time") : console.log("We got an error here"))
   
    }



    useEffect(() => {

        console.log(playlist)

    }, [playlist])

   
    return (
        <>
        <label htmlFor='createPlaylist'>Create Playlist</label>
        <input id='createPlaylist' name='createPlaylist' type='text'></input>
        <button id='createPlaylistButton' onClick={handleCreatePlaylist}>Add</button>
        <button id='createPlaylistButton2' onClick={handleAddSong}>Modify</button>
        <ul>
        {playlist.map(item => 
        
            <li key={item.id}>{`${item.name}`}</li>
        )}
        </ul>  
        </>
    )




}

export default Playlist