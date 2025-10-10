import react, {useState} from 'react';
import Music from '../Music.jsx';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons'; 
import {spotifyApi} from '../../Auth.js';




function SearchResults({searchFor, stageSong, result}) {


    if (!searchFor) {
        return;
    }


    /*
    
    const searchTerm = searchFor.toLowerCase();
     const results = Music.filter(item =>
        item.albumTitle.toLowerCase().includes(searchTerm) ||
        item.artist.toLowerCase().includes(searchTerm) ||
        item.tracks.some((track) => track.toLowerCase().includes(searchTerm))
    );

*/




let trackNum = 0;
    return (
        <div>
        <div className="results">
            <div className="BoxedDiv">
                <h3>Results:</h3>
            {result.length > 0 ? (
                result.map((track) => (

                                <div key={trackNum += 1} >
                                    <img src={track.albumURL} alt="Album Cover" />
                                    <div>{track.title}</div>
                                    <div>{track.artist}</div>
                                <button id="addToPlaylist2" type="button" onClick={() => stageSong(track)}><FontAwesomeIcon icon={faPlus} size="xs" /></button>
                                </div>


                ))
            ) : (
                <div>No results found</div>
            )}
            </div>
        </div>
        </div>
    );
    

}

export default SearchResults