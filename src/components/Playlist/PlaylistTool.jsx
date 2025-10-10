import react, {useState, useEffect} from 'react';
import './Playlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import {spotifyApi, getUserProfile} from '../../Auth.js';

function PlaylistTool(props) {
    const [bar, setBar] = useState({
        Active: false,
        id: ''
    });
       const [newName, setNewName] = useState('');
    const [isChecked, setIsChecked] = useState([])

    useEffect(() => {
        setBar({
            Active: false,
            id: ''
        })
    }, [])



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

    function toggleBar(index) {
            setBar({
                Active: !bar.Active,
                id: index
            })
    }

    async function addToSpotify() {
                   if (isChecked.length <= 0) {
                alert('You need items to do this')
                return
            }
        isChecked.map(item => {
    spotifyApi.createPlaylist(item.name, { 'description': '', 'public': true })
  .then(function(data) {
    console.log('Created playlist: ', item.name, data);
    item.songs.map( song => {
        spotifyApi.addTracksToPlaylist(data.body.id, [song.uri])
  .then(function(data) {
    console.log('Added tracks to playlist!: ', song.title);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
    })
  }, function(err) {
    console.log('Something went wrong!', err);
  });
        })

    }




    return (
        <section className='result'>
        <div className="playlist">
            <div>
                <label htmlFor='createPlaylist'>Create Playlist</label>
                <div className='input_button'>
                    <input id='createPlaylist' name='createPlaylist' type='text' placeholder='MY AMAZING MIX'></input>
                    <button id='createPlaylistButton' type="button" onClick={props.CreatePlaylist}>Add</button>
                    { props.playlist.length > 0 ? 
                        <button id='addToSpotify' type="button" onClick={addToSpotify}>Add To Spotify</button> 
                        : <></>
                     }
                </div>
            </div>
            <div>
            <div>
                <ul>
            {props.stagedSongs.length > 0  ? (
                props.stagedSongs.map((track, index) => (
                    <li key={index}>
                        <img src={track.albumURL} alt="Album Cover" />
                        <div>{track.title}</div>
                        <div>{track.artist}</div>
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
                            <button id="currentName" type="button" onClick={() => toggleBar(index)}>{item.name}</button>
                            <input type="checkbox" id={index} name={item.name}  onChange={(e) => toggleChecked(item.name, item.songs, e.target.checked)}/>
                            {bar.Active && bar.id === index ? 
                            <>
                            <input type='text' value={newName} onChange={changeName}></input>
                            <button id="nameChange" type="button" onClick={() => props.nameChange(item.name, newName)}>Change</button>
                            <button id="addSongs to Playlist" type="button" onClick={() => props.addToList(item.name)}>Add songs to List</button>
                            <button id="deletePlaylist" type="button" onClick={() => props.removePlaylist(item.name)}>Delete</button>
                            </> : <></> }

                        <ul>
                            {item.songs.map((track, trackIndex) => ( 
                                
                                <li key={trackIndex} >
                        <img src={track.albumURL} alt="Album Cover" />
                        <div>{track.title}</div>
                        <div>{track.artist}</div>
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