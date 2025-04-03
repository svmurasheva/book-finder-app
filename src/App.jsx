import './App.css'
import Header from './components/Header/Header'
import BookFinder from './components/Page1/BookFinder'
import ReadingList from './components/Page2/ReadingList'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  
  return (
    <>
      <div className="main-container">
        <Header/>
        <Router>
            <nav>
              <Link to="/">Book Finder</Link> | <Link to="/reading-list-page">Reading List</Link>
            </nav>
        <Routes>
          <Route path="/" element={<BookFinder/>}/>
          <Route path="/reading-list-page" element={<ReadingList/>}/>
        </Routes>
      </Router>
      
      <Footer/>
    </div>
    </>
  )
}

export default App
