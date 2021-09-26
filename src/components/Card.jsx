function Card(props) {
    const {
        title,
        author,
        imdbID: id,
        description,
        urlToImage: poster,
        url

    } = props;

    return (
        <div id={id} className='card movie'>
            <div className='card-image waves-effect waves-block waves-light'>
                {poster === 'N/A' ? (
                    <img alt='activator'
                        className='activator'
                        src={`https://via.placeholder.com/300x400?text=${title}`}
                    />
                ) : (
                    <a href={url} style={{overflow : 'hidden', height: '160px'}}><img alt='activator' className='activator imageclass' src={poster} /></a>
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    {author} <span className='right'>{description}</span>
                </p>
            </div>
        </div>
    );
}
export { Card };
