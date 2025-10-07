import react from 'react';
import './Playlist.css';

function PlaylistTool(props) {

    return (
        <>
        <section className="playlist">
            <div className='bubble'>
                <label htmlFor='createPlaylist'>Create Playlist</label>
                <div className='input_button'>
                    <input id='createPlaylist' name='createPlaylist' type='text' placeholder='MY AMAZING MIX'></input>
                    <button id='createPlaylistButton' onClick={props.CreatePlaylist}>Add</button>
                </div>
            </div>
            <div>
                <ul>
            {props.stagedSongs.length > 0  ? (
                props.stagedSongs.map((item, index) => (
                    <li key={index}>
                        <div>{item}</div>
                    </li>
                ))
            ) : (
                <li>No Staged Playlist</li>
            )}
            </ul>
            </div>
            <div>
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


        </section>
        </>
    )
}

export default PlaylistTool;