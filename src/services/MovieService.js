import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies'
};

class MovieService extends ApiService {
  getMovies = (page) => {
     return this.apiClient.get(ENDPOINTS.MOVIES, {
      params: {
        limit: 10,
        page: page
      }
    });
  };
}

export const movieService = new MovieService();
