import React from 'react';
import { CardList } from '../components/CardList';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        news: [],
        loading: true,
    };

    componentDidMount() {
        console.log(process.env);
        fetch(`http://newsapi.org/v2/top-headlines?country=ua&apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ news: data.articles, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
         `http://newsapi.org/v2/top-headlines?country=ua&category=${type}&apiKey=${API_KEY}`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ news: data.articles, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    };

    render() {
        const { news, loading } = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <CardList news={news} />}
            </main>
        );
    }
}

export { Main };
