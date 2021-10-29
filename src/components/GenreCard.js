import React from 'react'
import { Link } from 'react-router-dom'


const GenreCard = ({name, id}) => {

    return (
        <div className='card'>
            <h2>
                <Link to={`/genre/${id}`} className='genre-link' style={{ textDecoration: 'none'}}>
                {name}
                </Link>
            </h2>
                
        </div>
    )
}

export default GenreCard

