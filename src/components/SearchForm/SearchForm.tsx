import React, { useState } from 'react';
import styles from './SearchForm.module.scss';

interface SearchFormProps {
  onSearch: (query: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({ query: '', year: '', type: 'movie' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ ...searchParams, query: searchParams.query.trim() });
  };

  return (
    <div className='container px-4 py-5'>
      <form className="d-flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchParams.query}
          className={`form-control  ${styles.searchBar}   ${styles.inputResponsive}`}
          onChange={(e) => {
            setSearchParams((prev) => ({ ...prev, query: e.target.value }));
          }}
          placeholder="Search..."
        />

        <select
          className={`form-select  ${styles.filter}  ${styles.inputResponsive}`}
          value={searchParams.type}
          onChange={(e) => {
            setSearchParams((prev) => ({ ...prev, type: e.target.value }));
          }}
        >
          <option value="movie">Movies</option>
          <option value="series">TV Shows</option>
          <option value="episode">Episodes</option>
        </select>

        <input
          type="number"
          value={searchParams.year}
          className={`form-control ${styles.filter}     ${styles.inputResponsive}`}
          onChange={(e) => {
            setSearchParams((prev) => ({ ...prev, year: e.target.value }));
          }}
          placeholder="Year"
          min="1900"
          max={new Date().getFullYear()}
        />
        <button className={`btn btn-primary ${styles.btnResponsive}`} type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;