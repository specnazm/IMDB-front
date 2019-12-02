import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import MovieList from '../../component/MovieList';
import { getMovies } from '../../store/actions/MovieActions';
import { connect } from 'react-redux';


 class Page extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }
  componentDidMount() {
    this.props.getMovies({ page: this.state.currentPage, perPage: this.props.perPage});
  }

  handlePageClick = data => {
    let selected = data.selected + 1;

    this.setState({ currentPage: selected }, () => {
      this.props.getMovies({page: this.state.currentPage, perPage: this.props.perPage});
    });
  };

  render() {
    return (
      <div >
        <MovieList movies={this.props.movies} />
        {this.props.movies.length > 0  && <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
      /> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageCount: state.movie.pageCount || 1,
    movies: state.movie.all
  };
};

const mapDispatchToProps = {
  getMovies
};

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Page);
