import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { fetchSearch } from '../helper/api'
import ShowSearch from './ShowSearch'
import ArtistSearchCard from './ArtistSearchCard'


const Header = () => {
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])
  
    const handleChange = (event) => {
            setSearch(event.target.value)
        }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        fetchSearch(search).then(setSearchList)
    }
    


    return (
        <>
        <nav>
            <Link to={'/'}>
            <img src='https://gb.napster.com/assets/runway_eu/logo_napster-4d9106cd259d52addcd76c53946ff00dc4583c1b12aa129f137884961e853273.png' alt='logo' />
            </Link>
        <form method="GET" onSubmit={handleSubmit}>
            <input type='search' placeholder='Search for your favorite artist..' value={search} onChange={handleChange} id='text-search'></input>
            <input type='submit' id='submit-search' value="GO" />
        </form>
        </nav>

        <div className="search-results">
            {searchList.map((searches) => (
                <ArtistSearchCard {...searches} />
            ))}
        </div>
        </>
    )
}

export default Header


