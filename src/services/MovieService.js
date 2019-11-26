import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIE: '/api/movies/:id'
};

class MovieService extends ApiService {
  getMovies = (page, perPage) => {
     return this.apiClient.get(ENDPOINTS.MOVIES, {
      params: {
        limit: perPage,
        page: page
      }
    });
  };
  getMovie = id => this.apiClient.get(ENDPOINTS.MOVIE.replace(":id", id));
}

export const movieService = new MovieService();
