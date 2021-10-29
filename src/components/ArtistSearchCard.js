import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Searching.css'


const ArtistSearchCard = ({name, id}) => {

   const removeNames = () => {
       window.location.reload()
   }

    return (
        <div className='search-back'>

             <h3 onClick={removeNames}>
                <Link to={`/artist/${id}`} className='artist-search' style={{ textDecoration:'none' }}>
             {name}
             </Link>
            </h3>

        </div>
    )
}

export default ArtistSearchCard

