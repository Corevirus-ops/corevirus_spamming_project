import react from 'react';

function SearchBarTool(props) {

    
    return (
        <form>
            <label htmlFor={'props.searchBar'}>Type To Get Jammming</label>
            <input type='text' id='searchBar' name='searchBar' value={props.search} onChange={props.userInput}></input>
        </form>
    )
}

export default SearchBarTool;