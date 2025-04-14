import RatingBar from "./RatingBar";
import { useState } from "react";
import { removeLikedBookId, addLikedBookId, isLikedBookId } from "../utils/localStorage";


const Book = ({book, showLike}) => {

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

    const [likedBook, setLikedBook] = useState (isLikedBookId(id));

    const handleClick = (e) => {
        e.preventDefault();
        setLikedBook(!likedBook);
        if (likedBook) {
            removeLikedBookId(id);
        } else {
            addLikedBookId(id);
        }
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
                    {showLike && <button onClick={handleClick} className="like-button" aria-label="Like book">
                        <i className={likedBook ? "fa-solid fa-heart heart" : "fa-regular fa-heart heart"}></i>
                    </button>}
                </div>
            </div>
        </a>
    )
}

export default Book;