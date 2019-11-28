import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIE: '/api/movies/:id',
  REACTION: '/api/reactions'
};

class MovieService extends ApiService {

  getMovies = (page, perPage) => {
     return this.apiClient.get(ENDPOINTS.MOVIES, {
      params: {
        limit: perPage,
        page 
      }
    });
  };
  getMovie = id => {
    return this.apiClient.get(ENDPOINTS.MOVIE.replace(":id", id)
    )};

  addReaction = (id, reaction) => {
    return this.apiClient.post(ENDPOINTS.REACTION,{
        id,
        reaction 
    }
    )};
}

export const movieService = new MovieService();