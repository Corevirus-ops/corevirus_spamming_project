import react, {useState, useEffect} from 'react';

import SearchBarTool from './SearchBarTool.jsx';
import SearchResults from './SearchResults.jsx';
//import './SearchBar.css';

function SearchBar({stageSong}) {
    const [query, setQuery] = useState('')
      

    useEffect(() => {


    }, [query] ); 


    return (
        <section>
        <nav>
            <SearchBarTool  setQuery={setQuery} />
        </nav>
        <div>
        <SearchResults  searchFor={query} stageSong={stageSong} />
        </div>
        

        </section>
    )

}

export default SearchBar;