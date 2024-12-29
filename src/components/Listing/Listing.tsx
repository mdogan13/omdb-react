import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, updatePage } from "../../features/media/mediaSlice";
import styles from "./Listing.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const Listing: React.FC = () => {
  const { searchResults, loading, totalResults, searchQuery } = useSelector((state: any) => state.media);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(search({ ...searchQuery, title: searchQuery.title.trim() }));
  }, []);

  const searchMedia = (page: number) => {
    dispatch(updatePage(page));
    dispatch(search({ ...searchQuery, page, title: searchQuery.title.trim() }));
  };

  return (
    <>
      {/* <h2>Movie Listings</h2> */}
      {/* {loading && <p>Loading...</p>} */}
      <SearchForm onSearch={() => searchMedia(1)} />

      <div className="container d-flex flex-column justify-content-center"  >
        <div className="row w-100">
          {searchResults?.length > 0 ? (
            <>
              {searchResults.map((media: any) => (
                <div key={media.imdbID} className={`col-lg-3 col-md-4 col-sm-4 col-6 d-flex flex-column justify-content-between ${styles.mediaContainer}`}
                  onClick={() => navigate(`/details/${media.imdbID}`)}>
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
            !loading && <div className={styles.noResult}>No results found.</div>
          )}
        </div>

        <Pagination
          className="my-4 align-self-center"
          showQuickJumper
          total={totalResults}
          onChange={searchMedia}
          showSizeChanger={false}
          current={searchQuery.page} />
      </div>
    </>
  );
};

export default Listing;