import React from 'react';
import styles from './SearchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle, updateType, updateYear } from '../../features/media/mediaSlice';

interface SearchFormProps {
  onSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const { searchQuery } = useSelector((state: any) => state.media);
  const dispatch = useDispatch<any>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();  
  };

  return (
    <div className='container px-4 py-5'>
      <form className="d-flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery.title}
          className={`form-control  ${styles.searchBar}   ${styles.inputResponsive}`}
          onChange={(e) => {
            dispatch(updateTitle(e.target.value));

          }}
          placeholder="Search..."
        />

        <select
          className={`form-select  ${styles.filter}  ${styles.inputResponsive}`}
          value={searchQuery.type}
          onChange={(e) => {
            dispatch(updateType(e.target.value));
          }}
        >
          <option value="movie">Movies</option>
          <option value="series">TV Shows</option>
          <option value="episode">Episodes</option>
        </select>

        <input
          type="number"
          value={searchQuery.year}
          className={`form-control ${styles.filter}     ${styles.inputResponsive}`}
          onChange={(e) => {
            dispatch(updateYear(e.target.value));
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