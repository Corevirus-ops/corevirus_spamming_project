import react from 'react';
import Music from '../Music.jsx';


function SearchResults({searchFor}) {

    if (searchFor === '') {
        return;
    }

    const searchTerm = searchFor.toLowerCase();
    
     const results = Music.filter(item =>
        item.albumTitle.toLowerCase().includes(searchTerm) ||
        item.artist.toLowerCase().includes(searchTerm)
    );



    return (
        <ul>
            {results.length > 0 ? (
                results.map((item, index) => (
                    <li key={index}>
                        <div>{item.albumTitle}</div>
                        <div>{item.artist}</div>
                        <ul>
                            {item.tracks.map((track, trackIndex) => (
                                <li key={trackIndex} >{track}</li>
                            ))}
                        </ul>
                    </li>
                ))
            ) : (
                <li className="p-2 text-gray-500">No results found</li>
            )}
        </ul>
    );

}

export default SearchResults