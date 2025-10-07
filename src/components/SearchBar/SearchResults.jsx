import react from 'react';
import Music from '../Music.jsx';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons'; 




function SearchResults({searchFor, stageSong}) {

    if (searchFor === '') {
        return;
    }

    const searchTerm = searchFor.toLowerCase();

    
     const results = Music.filter(item =>
        item.albumTitle.toLowerCase().includes(searchTerm) ||
        item.artist.toLowerCase().includes(searchTerm) ||
        item.tracks.some((track) => track.toLowerCase().includes(searchTerm))
    );




    return (
        <div>
        <ul className="results">
            <div className="BoxedDiv">
                <h3>Results:</h3>
            {results.length >= 0 ? (
                results.map((item) => (
                        <ul>
                            {item.tracks.map((track, trackIndex) => ( 
                                <li key={trackIndex} >
                                    <div>{track} {`(by ${item.artist})`}</div>
                                <button id="addToPlaylist2" type="button" onClick={() => stageSong(`${track} (by) ${item.artist}`)}><FontAwesomeIcon icon={faPlus} size="xs" /></button>
                                </li>
                            ))}
                        </ul>
                ))
            ) : (
                <li>No results found</li>
            )}
            </div>
        </ul>
        </div>
    );

}

export default SearchResults