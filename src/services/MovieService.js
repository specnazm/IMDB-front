import ApiService from './ApiService';
import { POPULAR_LIMIT } from '../utils/constants';
import {  httpServiceOMDB } from './HttpService';


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

  constructor() {
    super();
    this.apiOMDB = httpServiceOMDB;
    this.apiOMDBClient = this.apiOMDB.client;
  }
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

  createMovie = ({Title: title, Plot : description, Poster: image_url, Genre: genre_id}) => {

    return this.apiClient.post(ENDPOINTS.MOVIES, {
      title,
      description,
      image_url,
      genre_id
    });
  };

  getMoviesOMDB = ({title, year, plot }) => {
    return this.apiOMDBClient.get('', {
      headers: {},
      params: {
        t: title,
        y: year,
        plot
      }
    });
 };

}

export const movieService = new MovieService();