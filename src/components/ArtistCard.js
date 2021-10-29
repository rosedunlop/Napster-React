
import { Link } from 'react-router-dom'

const ArtistCard = ({name, id}) => {


    return (
        <div>
            <h3>
                <Link to={`/artist/${id}`} className='artist-link' style={{ textDecoration:'none' }}>
             {name}
             </Link>
            </h3>
        </div>
    )
}

export default ArtistCard
