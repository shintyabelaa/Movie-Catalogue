<<<<<<< HEAD
import TheMovieDbSource from '../../data/themoviedb-source';
=======
import TheMovieDbSource from '../../data/themoviedb-souce';
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
<<<<<<< HEAD
      <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
=======
    <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies">
        </div>
  </div>
      `;
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
  },

  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
