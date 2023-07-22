import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import styles from "./Detail.module.css";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      <DetailMovie
        id={movie.id}
        rating={movie.rating}
        coverImg={movie.medium_cover_image}
        title={movie.title_long}
        summary={movie.description_full}
        genres={movie.genres}
      />
    </div>
  );
}
export default Detail;
