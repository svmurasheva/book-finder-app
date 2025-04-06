import BookList from "../BookList";
import SearchBar from "./SearchBar";


const BookFinder = () => {

    return(
        <>
            <h2>Book Finder 📖🔦</h2>
            <SearchBar/>
            <BookList/>
        </>
    );
};

export default BookFinder