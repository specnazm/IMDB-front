import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIE: '/api/movies/:id',
  REACTION: '/api/reactions',
  VISITED: '/api/visited',
  SEARCH: '/api/search',
  GENRES: '/api/genres'
};

class MovieService extends ApiService {

  getMovies = ({page, perPage}) => {
     return this.apiClient.get(ENDPOINTS.MOVIES, {
      params: {
        limit: perPage,
        page 
      }
    });
  };
  getMovie = id => {
    this.apiClient.post(ENDPOINTS.VISITED, {
      id
    })
    return this.apiClient.get(ENDPOINTS.MOVIE.replace(":id", id)
    )};

  addReaction = ({movieId :id, reaction}) => {
    return this.apiClient.post(ENDPOINTS.REACTION,{
        id,
        reaction 
    }
    )};

  search = ({page, perPage, title, genre}) => {
    return this.apiClient.get(ENDPOINTS.SEARCH, {
      params: {
        limit: perPage,
        page,
        title,
        genre
      }
    });
  };

  getGenres = () => {
    return this.apiClient.get(ENDPOINTS.GENRES);
  };
}

export const movieService = new MovieService();