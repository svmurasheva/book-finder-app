
import Book from "./Book";
import "./BookList.css";

const BookList = ({books}) => {
   
    return(
        <>
            <div className="book-list-main-box">
                {books.map((book) => (
                    <Book key={book.id} book={book} showLike={true}/>
                ))}
            </div>  
        </>
    )
}

export default BookList;