<<<<<<< HEAD
import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteMovieIdb from '../../data/favorite-movie-idb';
=======
import urlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-souce';
import { createMovieDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86

const Detail = {
  async render() {
    return `
<<<<<<< HEAD
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
=======
        <div id="movie" class="movie"></div>
        <div id="likeButtonContainer"></div>
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
    `;
  },

  async afterRender() {
<<<<<<< HEAD
    const url = UrlParser.parseActiveUrlWithoutCombiner();
=======
    const url = urlParser.parseActiveUrlWithoutCombiner();
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);

<<<<<<< HEAD
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteMovies: FavoriteMovieIdb,
=======
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average,
      },
    });
  },
};

export default Detail;
