import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { search } from '../../store/actions/MovieActions';
import { PER_PAGE } from '../../utils/constants';
import { SINGLE_MOVIE_PAGE } from '../../routes';

 class SearchResult extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }
  
  handlePageClick = data => {
    let selected = data.selected + 1;

    this.setState({ currentPage: selected }, () => {
      this.props.search(PER_PAGE, this.props.title, this.state.currentPage);
    });
  };

  render() {
    return (
      <div >
        <List>
            {this.props.searchResult.map( movie => (
            <ListItem key={movie.id}>
              <Link component={RouterLink} to={SINGLE_MOVIE_PAGE.replace(':id', movie.id)} variant="body2">
                {movie.title}
             </Link>
            </ListItem>
          ))}
        </List>
        {this.props.pageCount > 1  && <ReactPaginate
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
        searchResult: state.search.result || [],
        title : state.search.title,
        pageCount: state.search.pageCount || 1,
    };
};

const mapDispatchToProps = {
    search
};

export default withRouter(
connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResult));