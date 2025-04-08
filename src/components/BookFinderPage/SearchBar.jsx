import "./SearchBar.css";


const SearchBar = ({query, setQuery}) => {
    return(
        <input className="search-bar"
            size="42"
            type="text"
            placeholder="🔍 Search for a book by title, author or genre"
            value ={query}         
            onChange={event => setQuery(event.target.value)}
        />
    );
};

export default SearchBar;