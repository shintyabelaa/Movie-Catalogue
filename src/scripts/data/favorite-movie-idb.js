import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteMovieIdb = {
  async getMovie(id) {
<<<<<<< HEAD
    if (!id) {
      return;
    }

=======
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllMovies() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putMovie(movie) {
<<<<<<< HEAD
    if (!movie.hasOwnProperty('id')) {
      return;
    }

=======
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
    return (await dbPromise).put(OBJECT_STORE_NAME, movie);
  },
  async deleteMovie(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
<<<<<<< HEAD
  async searchMovies(query) {
    return (await this.getAllMovies()).filter((movie) => {
      const loweredCaseMovieTitle = (movie.title || '-').toLowerCase();
      const jammedMovieTitle = loweredCaseMovieTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedMovieTitle.indexOf(jammedQuery) !== -1;
    });
  },
=======
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
};

export default FavoriteMovieIdb;
