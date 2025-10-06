import react, {useState} from 'react';

function SearchBarTool(props) {
        const [search, setSearch] = useState('');

            function handleUserInput(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
    e.preventDefault();
    props.setQuery(search);
}


    
    return (
            <form onSubmit={handleSubmit} id='searchBarForm'>
            <label htmlFor='searchBar'>Type To Get Jammming</label>
            <input type='text' id='searchBar' name='searchBar' value={search} onChange={handleUserInput}></input>
            <button type='submit' id='searchBarSubmit'>Search</button>
        </form>
    )
}

export default SearchBarTool;