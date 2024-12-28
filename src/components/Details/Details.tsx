import React from 'react';

interface DetailsProps {
    title: string;
    year: string;
    genre: string;
    director: string;
    plot: string;
}

const Details: React.FC<DetailsProps> = ({ title, year, genre, director, plot }) => {
    return (
        <div className="details">
            details component
            {/* <h2>{title}</h2>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Director:</strong> {director}</p>
            <p><strong>Plot:</strong> {plot}</p> */}
        </div>
    );
};

export default Details;