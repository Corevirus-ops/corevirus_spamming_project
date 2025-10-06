import react, {useState, useEffect} from 'react'

function Playlist() {
    const [playlist, setPlaylist] = useState([
        {
         name: '',
         songs: [],   
        }
    ]);
    const [isCreated, setIsCreated] = useState(false);
    const [textName, setTextName] = useState('');

    function handleCreatePlaylist(e) {

        setIsCreated(true);

        setPlaylist(prevArray => [...prevArray, {
            name: textName,
            songs: []
        }]);

    }

    function handleUserInput(e) {
        setTextName(e.target.value);
    }



    useEffect(() => {

    }, [playlist])

    return (
        <>
        <label htmlFor='createPlaylist'>Create Playlist</label>
        <input id='createPlaylist' name='createPlaylist' type='text' value={textName} onChange={handleUserInput}></input>
        <button id='createPlaylistButton' onClick={handleCreatePlaylist}>Add</button>
        {playlist.forEach(item => 
        <>
            <h3>{item.name}</h3>

        </>        
        )}
        </>
    )




}

export default Playlist