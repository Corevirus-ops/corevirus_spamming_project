import react from 'react';
import Music from '../Music.jsx';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faPlus } from '@fortawesome/free-solid-svg-icons'; 




function SearchResults({searchFor}) {

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
                results.map((item, index) => (
                    <li key={index}>
                        <div>{item.albumTitle} {`(Album prod by ${item.artist})`}
                                <button><FontAwesomeIcon icon={faPlus} size="lg" /></button>
                                <button><FontAwesomeIcon icon={faCirclePlay} size="lg"/></button>
                            </div>
                        <ul>
                            {item.tracks.map((track, trackIndex) => (
                                <li key={trackIndex} >{track} {`(by ${item.artist})`} 
                                <button><FontAwesomeIcon icon={faPlus} size="lg" /></button>
                                <button><FontAwesomeIcon icon={faCirclePlay} size="lg"/></button>
                                </li>
                            ))}
                        </ul>
                    </li>
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