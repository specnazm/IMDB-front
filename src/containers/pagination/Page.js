import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import MovieList from '../../component/MovieList';
import { getMovies } from '../../store/actions/MovieActions';
import { connect } from 'react-redux';


 class Page extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageCount: 1
    };
  }
  componentDidMount() {
    this.props.getMovies(this.state.currentPage);
  }

  handlePageClick = data => {
    let selected = data.selected + 1;

    this.setState({ currentPage: selected }, () => {
      this.props.getMovies(this.state.currentPage);
    });
  };

  render() {
    return (
      <div >
        <MovieList movies={this.state.data} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
