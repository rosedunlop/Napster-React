import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { fetchSearch } from '../helper/api'
import ShowSearch from './ShowSearch'
import ArtistCard from './ArtistCard'

const Header = () => {
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])
    


    const handleSubmit = (event) => {
        event.preventDefault()

        fetchSearch().then(setSearchList)
        console.log(searchList)
    }
 

    const handleChange = (event) => {
        setSearch(event.target.value);
        console.log(event.target.value);
      };

    return (
        <>
        <nav>
            <Link to={'/'}>
            <img src='https://gb.napster.com/assets/runway_eu/logo_napster-4d9106cd259d52addcd76c53946ff00dc4583c1b12aa129f137884961e853273.png' alt='logo' />
            </Link>
        <form method="GET" onSubmit={handleSubmit}>
            <input type='search' placeholder='Search for your favourite artist..' value={search} onChange={handleChange}></input>
            <input type='submit' value="Search" />
        </form>
        </nav>

        <div className="search-results">
            {searchList.map((searches) => (
                <ArtistCard {...searches} />
            ))}
        </div>
        </>
    )
}

export default Header


