


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
                <img src={imageLinks.thumbnail} alt="Book image" />
                <div className="book-item-info">
                    <span>Title: {title}</span>
                    {authors && <span>Author: {authors} </span>}
                    {categories && <span>Genre: {categories}</span>}
                    {publishedDate && <span>Pablished: {publishedDate}</span>}
                    {averageRating && <span>Rate: {averageRating}</span>}
                </div>
            </div>
    )
}

export default Book;