import RatingBar from "../RatingBar/RatingBar";
import { useState } from "react";
import { removeLikedBookId, addLikedBookId, isLikedBookId } from "../../utils/localStorage";
import "./Book.css"

const Book = ({book, showLike}) => {

    const {
        title,
        subtitle,
        authors,
        categories,
        publishedDate,
        averageRating,
        imageLinks,
        infoLink
    } = book.volumeInfo;

    const formatArayInfo = (arr) => {
        const infoStr = arr?.join(", "); 
        return infoStr?.length < 50 ? infoStr : `${infoStr?.substring(0, 50)}...`
    }

    const formatStrInfo = (str) => {
        return str?.length < 50 ? str : `${str?.substring(0, 50)}...`
    }

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
                    <div className="book-item-info">
                        <span className="title">{formatStrInfo(title)}</span>
                        {subtitle && <p className="subtitle">{formatStrInfo(subtitle)}</p>}
                        {authors && <p className="authors">By {formatArayInfo(authors)} </p>}
                        {categories && <p className="genre">Genre: {formatArayInfo(categories)}</p>}
                        {publishedDate && <p className="published">Published: {publishedDate}</p>}
                        {averageRating && (
                            <RatingBar stars={averageRating} />  
                        )}
                    </div> 
                    <div className="heart-button">
                        {showLike && <button onClick={handleClick} className="like-button" aria-label="Like book">
                            <i className={likedBook ? "fa-solid fa-heart heart" : "fa-regular fa-heart heart"}></i>
                        </button>}
                    </div>
            </div>
        </a>
    )
}

export default Book;