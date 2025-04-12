import RatingBar from "./RatingBar";
import { useState } from "react";
import { LIKED_BOOKS_LOCAL_STORAGE_KEY } from "../config/constants";


const Book = ({book}) => {

    const {
        title,
        authors,
        categories,
        publishedDate,
        averageRating,
        imageLinks,
        infoLink
    } = book.volumeInfo;

    const id = book.id;

    const [likedBook, setLikedBook] = useState (
        JSON.parse(localStorage.getItem(LIKED_BOOKS_LOCAL_STORAGE_KEY) ?? '[]').includes(id)
    );

    const handleClick = (e) => {
        e.preventDefault();
        setLikedBook(!likedBook);
        let likedBooks = JSON.parse(localStorage.getItem(LIKED_BOOKS_LOCAL_STORAGE_KEY) ?? '[]');
        if (likedBook) {
            likedBooks = likedBooks.filter(bookId => bookId !== id);
        } else {
            likedBooks = [...likedBooks, id];
        }
        localStorage.setItem(LIKED_BOOKS_LOCAL_STORAGE_KEY, JSON.stringify(likedBooks));
    }

    return (
        <a href={infoLink ?? '#'} target="_blank">
            <div className="book-item">
                <img src={imageLinks?.thumbnail} alt="Book image" />
                
                <div className="book-item-info-wrapper">
                    <div className="book-item-info">
                        <span>Title: {title}</span>
                        {authors && <span>Author: {authors.join(", ")} </span>}
                        {categories && <span>Genre: {categories}</span>}
                        {publishedDate && <span>Published: {publishedDate}</span>}
                        {averageRating && (
                            <span>
                                Rating: <RatingBar stars={averageRating} />
                            </span>
                        )}
                    </div>
                    <button onClick={handleClick} className="like-button" aria-label="Like book">
                        <i className={likedBook ? "fa-solid fa-heart heart" : "fa-regular fa-heart heart"}></i>
                    </button>
                </div>
            </div>
        </a>
    )
}

export default Book;