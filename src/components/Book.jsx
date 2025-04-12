import RatingBar from "./RatingBar";


const Book = ({book}) => {

    const {
        title,
        authors,
        categories,
        publishedDate,
        averageRating,
        imageLinks
    } = book.volumeInfo;

    return (
        <div className="book-item">
        <img src={imageLinks?.thumbnail} alt="Book image" />
        
        <div className="book-item-info-wrapper">
            <div className="book-item-info">
                <span>Title: {title}</span>
                {authors && <span>Author: {authors} </span>}
                {categories && <span>Genre: {categories}</span>}
                {publishedDate && <span>Published: {publishedDate}</span>}
                {averageRating && (
                    <span>
                        Rating: <RatingBar stars={averageRating} />
                    </span>
                )}
            </div>
            <i className="fa-solid fa-heart-circle-plus heart"></i>
        </div>
    </div>
    )
}

export default Book;