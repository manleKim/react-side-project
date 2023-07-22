// DetailMovie.js
import PropTypes from "prop-types";
import styles from "./DetailMovie.module.css";

function DetailMovie({ title, rating, summary, genres, coverImg }) {
  return (
    <div className={styles.detail__container}>
      <div className={styles.movie__info}>
        <h2 className={styles.movie__title}>{title}</h2>
        <h3 className={styles.movie__rating}>Rating: {rating}</h3>
        <ul className={styles.movie__genres}>
          {genres && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
        <div className={styles.movie__summary}>
          <p>{summary}</p>
        </div>
      </div>
      <div className={styles.movie__img__container}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
      </div>
    </div>
  );
}

DetailMovie.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverImg: PropTypes.string.isRequired,
};

export default DetailMovie;
