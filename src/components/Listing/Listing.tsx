import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/media/mediaSlice";
import styles from "./Listing.module.scss";
import SearchForm from "../SearchForm/SearchForm";

const Listing: React.FC = (props) => {
  const dispatch = useDispatch<any>();
  const { searchResults, loading } = useSelector((state: any) => state.media);

  useEffect(() => {
    dispatch(search({ title: "pokemon", page: 1, type: "movie" }));
  }, []);

  const searchMedia = (query: any) => {
    if (query.query) {
      dispatch(search({ title: query.query, page: 1, type: query.type, year: query.year }));
    }
  };
  return (
    <>
      {/* <h2>Movie Listings</h2> */}
      {/* {loading && <p>Loading...</p>} */}
      {/* {error && <p>Error: {error}</p>} */}
      <SearchForm onSearch={searchMedia} />

      <div className="container d-flex justify-content-center"  >
        <div className="row w-100">
          {searchResults?.length > 0 ? (
            <>
              {searchResults.map((media: any) => (
                <div className={`col-lg-3 col-md-4 col-sm-4 col-6 d-flex flex-column justify-content-between ${styles.mediaContainer}`}>
                  <div >
                    <img src={media.Poster} alt={media.Title} className={styles.poster} />
                  </div>
                  <div className={styles.mediaTitle} data-bs-toggle="tooltip" title={`${media.Title} (${media.Year}) (${media.imdbID})`}>
                    {media.Title} ({media.Year}) ({media.imdbID})
                  </div>
                </div>
              ))}
            </>
          ) : (
            !loading && <div style={{ padding: "1rem" }}>No results found.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Listing;