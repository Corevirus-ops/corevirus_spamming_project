import react, {useState, useEffect} from 'react';

import SearchBarTool from './SearchBarTool.jsx';
import SearchResults from './SearchResults.jsx';

function SearchBar() {
    const [query, setQuery] = useState('')
      

    useEffect(() => {


    }, [query] ); 


    return (
        <>
        <nav>
            <SearchBarTool  setQuery={setQuery} />
        </nav>
        <SearchResults  searchFor={query} />

        </>
    )

}

export default SearchBar;