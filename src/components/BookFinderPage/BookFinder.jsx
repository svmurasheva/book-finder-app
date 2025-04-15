import BookList from "../BookList";
import SearchBar from "./SearchBar";
import { fetchBooksByQuery } from "../../api/books";
import {useState, useEffect} from "react";
import "./BookFinder.css"
import Pagination from "./Pagination";


const BookFinder = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 5;
    
    useEffect(() => {
        fetchBooksByQuery(query, 10, 0).then(setBooks);
    }, [query]);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const totalPages = Math.ceil(books.length / booksPerPage);

    return(
        <div>
        <div className="book-finder container">
            <SearchBar query={query} setQuery={setQuery}/>
            <BookList books={currentBooks}/>
        </div>
        

        <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
        </div>
    );
};

export default BookFinder