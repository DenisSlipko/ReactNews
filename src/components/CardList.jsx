import { Card } from './Card';

function CardList(props) {
    const { news = [] } = props;

    return (
        <div className='cards'>
            {news.length ? (
                news.map((new1) => <Card key={new1.imdbID} {...new1} />)
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}
export { CardList };
