import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ChildCard from '../components/ChildCard'


const SideCard = ({ name, description, links, }) => {
const baseUrl = links.childGenres.href
const [childGenres, setChildGenres] = useState([])


    useEffect(() => {
        async function fetchChildGenres(){
            const config = {
                method: 'get',
                url: 'https://api.napster.com/v2.2/genres/g.178',
                headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA=='
                }
              };

              const response = await axios(config)
              console.log('hello')
              setChildGenres(response.data.genres)    
        }
        fetchChildGenres()
    }, [])

    return (
    
        <div>
            <h4>{name}</h4>
            <p>{description}</p>
            <div className='children'>
               {childGenres.map((childGenre) => (
                    <div key={childGenre.id}>
                        <ChildCard {...childGenre} />
                    </div>
                    ))}
               
            </div>  
        </div>
        
    )   
}


export default SideCard
