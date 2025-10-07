import react, {useState} from 'react';
import './SearchBar.css';

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
        <form onSubmit={handleSubmit} id='searchBarForm' className="searchBarTool">
            <div className="bubble">
                <label htmlFor='searchBar'>Type To Get Jammming</label>
                <div className='input_button'>
                    <input type='text' id='searchBar' name='searchBar' value={search} onChange={handleUserInput} placeholder='HOT, NEW, EXCITING'></input>
                    <button type='submit' id='searchBarSubmit'>Search</button>
                </div>
            </div>
        </form>
    )
}

export default SearchBarTool;