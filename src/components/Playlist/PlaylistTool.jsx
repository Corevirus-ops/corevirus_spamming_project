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
        </section>
        </>
    )
}

export default PlaylistTool;