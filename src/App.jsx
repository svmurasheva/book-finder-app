import './App.css'
import Header from './components/Header/Header'
import BookFinder from './components/BookFinderPage/BookFinder'
import ReadingList from './components/ReadingListPage/ReadingList'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route, Link, Form} from "react-router-dom"
import {useState, useEffect} from "react"
function App() {
  const [data, setData] = useState()

  // https://www.googleapis.com/books/v1/volumes?q=intitle:nasa+inauthor:Bromberg
  
  return (
    <>
      <div className="main-container">
      <Router>
            <nav>
              <Link to="/">Book Finder</Link> | <Link to="/reading-list-page">Reading List</Link>
            </nav>
        <Routes>
          <Route path="/" element={<BookFinder/>}/>
          <Route path="/reading-list-page" element={<ReadingList/>}/>
        </Routes>
      </Router>
      <Header/>
      <Footer />
    </div>
    </>
  )
}

export default App
