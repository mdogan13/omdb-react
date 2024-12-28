import React from 'react';

interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
}

interface ListingProps {
    movies: Movie[];
}

const Listing: React.FC<ListingProps> = ({ movies }) => {
    return (
        <div className="movie-listing">
            listing component
            {/* {movies.map(movie => (
                <div key={movie.imdbID} className="movie-item">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </div>
            ))} */}
        </div>
    );
};

export default Listing;