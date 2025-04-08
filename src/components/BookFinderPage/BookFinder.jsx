import BookList from "../BookList";
import SearchBar from "./SearchBar";
import { fetchBooks, fetchBooksByQuery } from "../../api/books";
import {useState, useEffect} from "react";


const BookFinder = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('')

    useEffect(() => {
        fetchBooksByQuery(query).then(setBooks);
      }, [query]);

    return(
        <>
            <SearchBar query={query} setQuery={setQuery}/>
            <BookList books={books}/>
        </>
    );
};

export default BookFinder