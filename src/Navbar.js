import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Logo from './assets/logo.png'; // Import your logo file

export default function Navbar({onSearch}) {
  return (
    <div>
        <nav className='navbar'>
            <h1 style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Logo} alt="Logo" style={{ marginRight: '15px', height: '45px' }} /> {/* Adjust height and margin as needed */}
                SakshamMoviez
            </h1>
            <ul className='nav'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/tv">TV</Link>
                </li>
                <li>
                    <Link to="/favmov">Fav Movie</Link>
                </li>
                <li>
                    <Link to="/favtv">Fav Tv series</Link>
                </li> 
            </ul>
            <SearchBar onSearch={onSearch}/>
        </nav>
    </div>
  )
}
