import { fetchBooks } from "../api/books";
import {useState, useEffect} from "react";
import Book from "./Book";
import "./BookList.css";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks().then(setBooks);
      }, []);
    
    return(
        <>
            <div>
                {books.map((book) => (
                    <Book key={book.id} book={book}/>
                ))}
            </div>  
        </>
    )
}

export default BookList;