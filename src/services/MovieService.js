import ApiService from './ApiService';
import { POPULAR_LIMIT } from '../utils/constants';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIE: '/api/movies/:id',
  REACTION: '/api/reactions',
  VISITED: '/api/visited',
  SEARCH: '/api/search',
  GENRES: '/api/genres',
  POPULAR: '/api/popular'
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
    this.apiClient.post(ENDPOINTS.VISITED, {
      id
    })
    return this.apiClient.get(ENDPOINTS.MOVIE.replace(":id", id)
    )};

  addReaction = (id, reaction) => {
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

  getPopular = () => {
    return this.apiClient.get(ENDPOINTS.POPULAR, {
      params: {
        limit: POPULAR_LIMIT
      }
    });
  };

  createMovie = ({title, description, imageUrl, genre}) => {
    return this.apiClient.post(ENDPOINTS.MOVIES, {
      title,
      description,
      image_url: imageUrl,
      genre_id: genre
    });
  };

}

export const movieService = new MovieService();