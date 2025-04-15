import "./ReadingList.css";
import { fetchBooksByIds } from "../../api/books";
import{ useState, useEffect } from "react";
import Book from "../Book";
import { getLikedBookIds, removeLikedBookId } from "../../utils/localStorage"; 


const ReadingList = () => {
    const [likedBooks, setLikedBooks] = useState([]);
    
    useEffect(() => {
        const likedBookIds = getLikedBookIds();
        fetchBooksByIds(likedBookIds).then(setLikedBooks);
        console.log("likedBooks: ", likedBooks);
    }, []);

    const handleDeleteButton = (e, id) => {
        removeLikedBookId(id);
        setLikedBooks(likedBooks.filter((book) => book.id !== id)); 
    };
    
    return (
        <div className="reading-list-main">
            <h2>Reading List </h2>
            <ul className="reading-list-container">
                {likedBooks.map((book) => (
                    <div className="reading-list">
                        <Book key={book.id} book={book}/>
                        <div>
                            <a href={book.volumeInfo.previewLink ?? "#"} target="_blank" className="button">
                                <i className="fa-solid fa-book-open read"></i>
                            </a>
                            <button className="button" onClick={(e) => handleDeleteButton(e, book.id)}>
                                <i className="fa-solid fa-trash delete"></i>
                            </button>
                        </div>
                    </div>
                ))}  
            </ul>
        </div>
    );
};

export default ReadingList