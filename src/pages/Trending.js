import {useState, useEffect} from 'react'
import { fetchTopArtists, fetchTopTracks, fetchTopAlbums } from '../helper/api'
import TopArtistCard from '../components/TopArtistCard'
import TopTrackCard from '../components/TopTrackCard'
import TopAlbumCard from '../components/TopAlbumCard'
import '../styles/Trending.css'

const Trending = () => {
    const [topArtists, setTopArtists] = useState([])
    const [topTracks, setTopTracks] = useState([])
    const [topAlbums, setTopAlbums] = useState([])

    useEffect(() => {
        fetchTopArtists().then(setTopArtists)
        fetchTopTracks().then(setTopTracks) 
        fetchTopAlbums().then(setTopAlbums)
    }, [])
  

    return (
        <div className='backer'>

        <div className='Trending'>
            <div className='headers'>
            <h1>Top 10 Artists</h1>
            <h1>Top 10 Tracks</h1>
            <h1>Top 10 Albums</h1>
            </div>
            <div className='top-artists'>
                {topArtists.map((artist) => (
                    <TopArtistCard {...artist}/>
                ))}
            </div>
            <div className='top-tracks'>
                {topTracks.map((track) => (
                    <TopTrackCard {...track} />
                ))}
            </div>
            <div className='top-albums'>
                {topAlbums.map((album) => (
                    <TopAlbumCard {...album} />
                ))}
            </div>          
        </div>
        </div>
    )
}

export default Trending
