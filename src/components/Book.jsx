import { fetchBooks } from "../api/books"


const Book = ({book}) => {
    
// const bookItem = `${book.imageLinks?.smallThumbnail}${book.volumeInfo?.title} ${book.volumeInfo?.authors}`
    return (
            <div className="book-item">
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book image" />
                <div className="book-item-info">
                     <span><strong>Title: </strong>{book.volumeInfo?.title}</span>
                     <span><strong>Author: </strong>{book.volumeInfo?.authors} </span>
                     <span><strong>Genre: </strong>{book.volumeInfo?.categories}</span>
                    
                    
                </div>
            </div>
    )
}

export default Book;