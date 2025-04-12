import './Header.css'
import logoImg from '../../assets/image.png';
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <div className='header container'>
            <div className='header-main'>
                <img src={logoImg} alt="Logo" />
                <h1>Book Finder</h1>
            </div>
            <nav>
                <Link to="/">Book Finder</Link>
                <Link to="/reading-list-page">Reading List</Link>
            </nav>
        </div>
    );
};

export default Header;