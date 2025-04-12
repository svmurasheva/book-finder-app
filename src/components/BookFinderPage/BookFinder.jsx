import BookList from "../BookList";
import SearchBar from "./SearchBar";
import { fetchBooksByQuery } from "../../api/books";
import {useState, useEffect} from "react";
import "./BookFinder.css"


const BookFinder = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('')

    useEffect(() => {
    fetchBooksByQuery(query, 10, 0).then(setBooks);
      }, [query]);

    return(
        <>
            <div className="book-finder-main-box">
            <SearchBar query={query} setQuery={setQuery}/>
            <BookList books={books}/>
            </div>
            
        </>
    );
};

export default BookFinder