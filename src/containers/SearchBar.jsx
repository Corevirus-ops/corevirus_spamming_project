import react, {useState, useEffect} from 'react';

import SearchBarTool from '../components/SearchBarTool.jsx';
import SearchResults from '../components/SearchResults.jsx';

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