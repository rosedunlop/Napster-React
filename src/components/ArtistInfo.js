const ArtistInfo = ({name, bio, url}) => {
    console.log(bio)
    return (
        <div className='group'>
            <h3>
             {name}
            </h3>
            <div className='title'>

            <div className='image-shot'>
                <img src={url} alt={name} />
            </div>


            </div>
            <div className= 'bio'>
                <p>{bio}</p>
            </div>
        </div>
    )
}

export default ArtistInfo