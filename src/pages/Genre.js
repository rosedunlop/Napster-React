
import GenreCard from "../components/GenreCard.js"
import '../styles/Genre.css'

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