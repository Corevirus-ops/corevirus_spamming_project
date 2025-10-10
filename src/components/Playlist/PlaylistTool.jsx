import react, {useState} from 'react';
import './Playlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 

function PlaylistTool(props) {
    const [barActive, setBarActive] = useState(false);
    const [newName, setNewName] = useState('');
    const [isChecked, setIsChecked] = useState([])
    function changeName(e) {
        setNewName(e.target.value);
    }

    function toggleChecked(newName, arrayOfSongs, checkmarked) {
        if (checkmarked) {
            setIsChecked(prevArray => {
             return   [...prevArray, { name: newName, songs: arrayOfSongs}]
            })
        } else {
            setIsChecked(prevArray => {
                return       prevArray.filter((item) => item.name !== newName)
            })
        }
        
    }

    return (
        <section className='result'>
        <div className="playlist">
            <div>
                <label htmlFor='createPlaylist'>Create Playlist</label>
                <div className='input_button'>
                    <input id='createPlaylist' name='createPlaylist' type='text' placeholder='MY AMAZING MIX'></input>
                    <button id='createPlaylistButton' type="button" onClick={props.CreatePlaylist}>Add</button>
                    {props.playlist.length > 0 ? 
                        <button id='addToSpotify' type="button" >Add To Spotify</button> 
                        : <></>
                     }
                </div>
            </div>
            <div>
            <div>
                <ul>
            {props.stagedSongs.length > 0  ? (
                props.stagedSongs.map((item, index) => (
                    <li key={index}>
                        <div>{item}</div>
                        <button id='removeStaged' type="button" onClick={() => props.removeStaged(index)}><FontAwesomeIcon icon={faTrash} /></button>
                    </li>
                ))
            ) : (
                <li></li>
            )}
            </ul>
            </div>
            <form className='result'>
                {props.playlist.length > 0 ? (
                props.playlist.map((item, index) => (
                    <li key={index}>
                            <button id="currentName" type="button" onClick={() => setBarActive(barActive ? false : true)}>{item.name}</button>
                            <input type="checkbox" id={index} name={item.name}  onChange={(e) => toggleChecked(item.name, item.songs, e.target.checked)}/>
                            {!barActive ? <></> : 
                            <>
                            <input type='text' value={newName} onChange={changeName}></input>
                            <button id="nameChange" type="button" onClick={() => props.nameChange(item.name, newName)}>Change</button>
                            <button id="addSongs to Playlist" type="button" onClick={() => props.addToList(item.name, props.stagedSongs)}>Add songs to List</button>
                            <button id="deletePlaylist" type="button" onClick={() => props.removePlaylist(item.name)}>Delete</button>
                            </>}

                        <ul>
                            {item.songs.map((track, trackIndex) => ( 
                                
                                <li key={trackIndex} >
                                    <div>{track}</div>
                                    <button id="songRemove" type="button" onClick={() => props.removeSong(item.name, trackIndex)}><FontAwesomeIcon icon={faTrash} /></button>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))
            ) : (
                <li>No Playlist</li>
            )}
            </form>
            </div>

        </div>
        </section>
    )
}

export default PlaylistTool;