import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchGenreTopArtist, fetchGenreTopTracks, fetchGenreTopAlbums, fetchGenreNewRelease } from '../helper/api'
import ArtistCard from '../components/ArtistCard'
import TracksCard from '../components/TracksCard'
import AlbumCard from '../components/AlbumCard'
import '../styles/GenreDetail.css'
import NewRelease from '../components/NewRelease'
// import { fetchGenreNewRelease } from '../helper/api'

const GenreDetail = ({genres}) => {
    const [genreArtists, setGenreArtists] = useState([])
    const [genreAlbums, setGenreAlbums] = useState([])
    const [genreTracks, setGenreTracks] = useState([])
    const [genreReleases, setGenreReleases] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        fetchGenreTopArtist(id).then(setGenreArtists)
        fetchGenreTopTracks(id).then(setGenreTracks)
        fetchGenreTopAlbums(id).then(setGenreAlbums)
        fetchGenreNewRelease(id).then(setGenreReleases)
    },[] )


    return (
        <section className='backer'>
        <div className='genre-container'>
            <div className='headers'>
                <h1>Top 10 Artists</h1>
                <h1>Top 10 Tracks</h1>
                <h1>Top 10 Albums</h1>
            </div>
            <div className='top-artist'>
            {genreArtists.map((artist) => (
                <>
                    <ArtistCard {...artist}/>       
                </>
                ))}
            </div>
            <div className ='top-album'>
                {genreAlbums.map((album) => (
                    <AlbumCard {...album}/>
                ))}                     
            </div>  
            <div className ='top-track'>
                {genreTracks.map((track) => (
                    <TracksCard {...track}/>
                ))}
            </div> 
            <h2 className='new-release'>New Releases</h2>
            <div className='new-albums-genre'>
            {genreReleases.map((newAlbums) => (
                    <NewRelease {...newAlbums}/>
                ))}
            </div>
        </div>
        </section>
    )
}

export default GenreDetail
