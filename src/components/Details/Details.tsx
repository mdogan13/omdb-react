import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMediaById } from '../../shared/api/omdb-service';
import styles from './Details.module.scss';
import Metascore from '../Metascore/Metascore';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { Media } from '../../shared/models/Media';
import { MediaState } from '../../features/media/mediaSlice';


const Details: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [mediaDetails, setMediaDetails] = useState<Media>(null);
  const { loading } = useSelector((state: { media: MediaState }) => state.media);

  useEffect(() => {
    const fetchMediaDetails = async () => {
      if (imdbID) {
        getMediaById(imdbID).then((response: any) => {
          setMediaDetails(response.data);
        });
      }
    };
    fetchMediaDetails();
  }, []);

  return (
    <>
      {mediaDetails && !loading ? (
        <div className={`container d-flex justify-content-center ${styles.mainContainer}`}>
          <div className={`row w-100 ${styles.containerRow}`}>
            <div className='col-12 col-md-4 col-lg-4'>
              <img className={styles.poster} src={mediaDetails.Poster} alt={mediaDetails.Title} />
              <div className={`mt-3 ${styles.metaData}`}>
                <div className='d-flex justify-content-around'>
                  <div>{mediaDetails.Genre.split(',')[0].trim()}</div>
                  <div>{mediaDetails.Released.split(' ').slice(-1)}</div>
                  {mediaDetails.Type === 'movie' && (<div>{mediaDetails.Runtime}</div>)}
                  {mediaDetails.Type === 'series' && (<div>{mediaDetails.totalSeasons} Season(s)</div>)}
                  {mediaDetails.Type === 'episode' && (<div></div>)}
                </div>

                <div className={`d-flex align-items-center`}>
                  <div className={styles.metaScoreWrapper}>
                    <Metascore score={mediaDetails.Metascore} />
                  </div>
                  <div className={`d-flex flex-column text-center ${styles.imdbWrapper}`}>
                    <h1> {mediaDetails.imdbRating} / 10</h1>
                    <span className={styles.imdbTitle}>IMDB</span>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-12 col-md-8 col-lg-8'>
              <h1>{mediaDetails.Title}</h1>
              <div className='d-flex flex-column gap-4 mt-5'>
                <div>
                  <h3>Synopsis</h3>
                  <div>{mediaDetails.Plot}</div>
                </div>
                <div>
                  <h3>Cast</h3>
                  <div>{mediaDetails.Actors}</div>
                </div>
                <div>
                  <h3>Writer(s)</h3>
                  <div>{mediaDetails.Writer}</div>
                </div>
                <div>
                  <h3>Director</h3>
                  <div>{mediaDetails.Director}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )
      }
    </>
  );
};

export default Details;
