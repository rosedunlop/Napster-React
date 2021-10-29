import { Link } from 'react-router-dom'
import '../styles/Home.css'


const Home = () => {
    return (
        <>
            <section className='background'>
                <div className='genre'>
                    <div>
                       <h2><span>EXPLORE</span> YOUR TASTE IN MUSIC</h2>
                       <p>Search different genres to find what clicks with you...</p> 
                    <Link to='/genre' className='Link link-genre' style={{ textDecoration: 'none'}}>Genre</Link>
                    </div>
                    </div>
                    <div className='vl'></div>
                    <div className='trending'>
                    <div>
                    <h2><span>THE MOST</span> POPULAR MUSIC CURRENTLY OUT NOW</h2>
                    <p>Discover the top trending artist...</p>
                    <Link to='/trending' className='Link link-trend' style={{ textDecoration: 'none'}}>Trending</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
