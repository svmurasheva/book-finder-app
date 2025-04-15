import BookList from "../BookList";
import SearchBar from "./SearchBar";
import { fetchBooksByQuery } from "../../api/books";
import {useState, useEffect} from "react";
import "./BookFinder.css"
import Pagination from "./Pagination";



const BookFinder = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    const [pageNum, setPageNum] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        fetchBooksByQuery(query, pageSize, pageNum).then(setBooks);
        fetchBooksByQuery(query, pageSize, pageNum + 1).then((nextPage) => setHasNextPage(nextPage.length > 0));
    }, [query, pageNum, pageSize]);
    
    return(
        <div>
            <div className="book-finder-container">
                <SearchBar query={query} setQuery={setQuery}/>
                <BookList books={books}/>
            </div>
            <Pagination 
                pageNum={pageNum} 
                setPageNum={setPageNum} 
                pageSize={pageSize}
                setPageSize={setPageSize}
                hasNextPage={hasNextPage}/>
        </div>
    );
};

export default BookFinder