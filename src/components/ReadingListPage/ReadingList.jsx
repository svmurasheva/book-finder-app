import "./ReadingList.css";
import { fetchBooksByIds } from "../../api/books";
import{ useState, useEffect } from "react";
import { LIKED_BOOKS_LOCAL_STORAGE_KEY } from "../../config/constants";
import Book from "../Book";


const ReadingList = () => {
    const [likedBooks, setLikedBooks] = useState([]);
    useEffect(() => {
        const likedBookIds = JSON.parse(localStorage.getItem(LIKED_BOOKS_LOCAL_STORAGE_KEY) ?? "[]");
        fetchBooksByIds(likedBookIds).then(setLikedBooks);
        console.log("likedBooks: ", likedBooks);
    }, [])
    return (
        <div className="reading-list-main">
            <h2>Reading List </h2>
            <ul className="reading-list-container">
                {likedBooks.map((book) => (
                    <div className="reading-list">
                            <Book key={book.id} book={book}/>
                        {/* <li className="reading-list-items">Added book</li> */}
                        <button><i className="fa-solid fa-book-open read"></i></button>
                        <button><i className="fa-solid fa-trash delete"></i></button>
                    </div>
                ))}  
            </ul>
        </div>
    );
};

export default ReadingList