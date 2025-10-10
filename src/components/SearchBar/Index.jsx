import react, {useState, useEffect} from 'react';

import SearchBarTool from './SearchBarTool.jsx';
import SearchResults from './SearchResults.jsx';
import {spotifyApi} from '../../Auth.js';

function SearchBar({stageSong}) {
    const [query, setQuery] = useState('');
        const [result, setResult] = useState([]);
      

    useEffect(() => {
let cancel = false;
if (!query) return
spotifyApi.searchTracks(query).then(res => {
if (cancel) return

    setResult(
    res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image 
            return smallest
        }, track.album.images[0])

        return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumURL: smallestAlbumImage.url
        }
    }))
})
return () => cancel = true
    }, [query] ); 


    return (
        <section>
        <nav>
            <SearchBarTool  setQuery={setQuery} />
        </nav>
        <div>
        <SearchResults  searchFor={query} stageSong={stageSong} result={result}/>
        </div>
        

        </section>
    )

}

export default SearchBar;