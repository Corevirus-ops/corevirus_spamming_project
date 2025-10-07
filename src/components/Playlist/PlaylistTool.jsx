import react from 'react';
import './Playlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 

function PlaylistTool(props) {

    return (
        <section className='result'>
        <div className="playlist">
            <div>
                <label htmlFor='createPlaylist'>Create Playlist</label>
                <div className='input_button'>
                    <input id='createPlaylist' name='createPlaylist' type='text' placeholder='MY AMAZING MIX'></input>
                    <button id='createPlaylistButton' onClick={props.CreatePlaylist}>Add</button>
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
            <div className='result'>
                {props.playlist.length > 0 ? (
                props.playlist.map((item, index) => (
                    <li key={index}>
                            <div>{item.name}</div>

                        <ul>
                            {item.songs.map((track, trackIndex) => ( 
                                
                                <li key={trackIndex} >
                                    <div>{track}</div>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))
            ) : (
                <li>No Playlist</li>
            )}
            </div>
            </div>

        </div>
        </section>
    )
}

export default PlaylistTool;