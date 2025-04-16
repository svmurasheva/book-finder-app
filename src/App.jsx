import './App.css'
import Header from './components/Header/Header'
import BookFinder from './components/BookFinder/BookFinder'
import ReadingList from './components/ReadingList/ReadingList'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
      <div className="main">
        <Router basename='/book-finder-app/'>
          <Header/>    
          <Routes>
            <Route index path="/" element={<BookFinder/>}/>
            <Route path="/reading-list-page" element={<ReadingList/>}/>
          </Routes>
        </Router>
        <Footer />
    </div>
  )
}

export default App
