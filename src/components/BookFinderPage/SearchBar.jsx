import { useState } from "react";
import "./SearchBar.css";
import Book from "../Book";




const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    // const booksList = [
    //     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    //     { title: "Moby Dick", author: "Herman Melville", genre: "Adventure" },
    //     { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    //     { title: "1984", author: "George Orwell", genre: "Dystopian" },
    //     { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
    //     { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
    //   ];
    
    // const filterBooks = booksList.filter((book) =>
    //     book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     book.author.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     book.genre.toLowerCase().includes(searchInput.toLowerCase())
        
    //     )
    //     function handleClick() {
    //         console.log('clicked!');
    //       }
   
    return(
        <>
            <input className="search-bar"
                size="42"
                type="text"
                placeholder="🔍 Search for a book by title, author or genre"
                value ={searchInput}         
                onChange={event => setSearchInput(event.target.value)}
            />
            
           
            {/* <ul className="books-list">
                {filterBooks.length > 0 ? (
                    filterBooks.map((book, index) =>  
                        <li className="list-items" key={index}>
                            <strong>Title:</strong> {book.title}.<br/>
                            <strong>Author:</strong> {book.author}. <br/>
                            <strong>Genre:</strong> {book.genre}
                            <button className="like-button" onClick={handleClick}>♡</button>
                        </li>)
                    ) : (
                    <li>No books found</li>
                   
                    )}
                    
            </ul> */}
        </>
    );
};

export default SearchBar;