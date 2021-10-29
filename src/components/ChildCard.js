import React from 'react'
import { Link } from 'react-router-dom'

const ChildCard = ({name, id}) => {
const imgUrl = 'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?w=824&quality=70'
const showSideGenre = () => {
    
}

    return (
        <div className='card'>
            <h2>{name}</h2>
            <img src={`${imgUrl}`} alt={id}/>
        </div>
    )
}

export default ChildCard
