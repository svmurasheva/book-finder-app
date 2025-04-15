import RatingBar from "./RatingBar";
import { useState } from "react";
import { removeLikedBookId, addLikedBookId, isLikedBookId } from "../utils/localStorage";



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
                        <span><span clsssName="label">Title:</span> {title}</span>
                        {subtitle && <span><span clsssName="label">Subtitle:</span> {subtitle}</span>}
                        {authors && <span><span clsssName="label">Author:</span> {authors.join(", ")} </span>}
                        {categories && <span><span clsssName="label">Genre:</span> {categories}</span>}
                        {publishedDate && <span><span clsssName="label">Publisher:</span> {publishedDate}</span>}
                        {averageRating && (
                            <span>
                                <span clsssName="label">Rating:</span> <RatingBar stars={averageRating} />
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