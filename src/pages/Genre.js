import { useState, useEffect } from "react"
import axios from 'axios'
import GenreCard from "../components/GenreCard"
import '../styles/Genre.css'
import { fetchGenres } from "../helper/api"

const Genre = ({genres}) => {
    return (
        <section className='backer'>

        <div className='container'>
            <div className='main-genre'>
                    {genres.map((genre) => (
                        <div key={genre.shortcut} className={genre.name} id={genre.shortcut}>
                            <GenreCard {...genre} />
                        </div>
                    ))}       
            </div>
    </div>
        </section>
    )
}


export default Genre