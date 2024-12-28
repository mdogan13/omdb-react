import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/media/mediaSlice";
import styles from "./Listing.module.scss";

const Listing: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { searchResults, loading, error } = useSelector((state: any) => state.media);

  useEffect(() => {
    console.log("Dispatching search action...");
    dispatch(search({ title: "pokemon", page: 1, type: "movie" }));
  }, []);

  return (
    <>
      {/* <h2>Movie Listings</h2> */}
      {/* {loading && <p>Loading...</p>} */}
      {/* {error && <p>Error: {error}</p>} */}

      <div className="container d-flex justify-content-center  "  >
        <div className="row">
          {searchResults?.length > 0 ? (
            <>
              {searchResults.map((media: any) => (
                <div  className={`col-lg-3 col-md-4 col-sm-4 col-6 d-flex flex-column justify-content-between ${styles.mediaContainer}`}>
                  <div >
                    <img src={media.Poster} alt={media.Title} className={styles.poster} />
                  </div>
                  <div className={styles.mediaTitle}>{media.Title} ({media.Year})</div>
                </div>
              ))}
            </>
          ) : (
            !loading && <p>No results found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Listing;