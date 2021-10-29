import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchArtist, fetchArtistImage, fetchArtistBio } from '../helper/api'
import ArtistInfo from '../components/ArtistInfo'
import '../styles/Artist.css'
// import { fetchGenreNewRelease } from '../helper/api'

const Artists = () => {
    const [artist , setArtist] = useState([])
    const [bio , setBio] = useState([])
    const [image, setImage] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchArtist(id).then(setArtist)
        fetchArtistBio(id).then(setBio).catch(handleError)
        fetchArtistImage(id).then(setImage)
    },[])

    const handleError = (error) => {
        if(error.response) {
            setBio('')
        }
    }


    return (
        <section className='backer'>
    <div className='container'>
        {artist.map((artist) => (
                <>
                    <ArtistInfo {...artist}{...image}{...bio}/>       
                </>
                ))}
    </div>
        </section>
    )
}

export default Artists