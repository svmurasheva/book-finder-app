import { fetchBooks } from "../api/books"


const Book = ({book}) => {
    
const bookItem = `${book.imageLinks?.smallThumbnail}${book.volumeInfo?.title} ${book.volumeInfo?.authors}`
    return (
        
            <div>
                {bookItem}
            </div>
        
    )
}

export default Book;