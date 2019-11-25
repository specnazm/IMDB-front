import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie } from '../../store/actions/MovieActions';
import { movieService } from '../../services/MovieService';


class MoviePage extends Component {

    componentDidMount() {
      const $id = this.props.match.params.id;
      if (!this.props.selected)
        this.props.getMovie($id);
    }
    render() {
      return (
        <div> This is page for movie :  {this.props.movie.id} with title : {this.props.movie.title}</div>
      );
    }
   
};

const mapStateToProps = state => {
    return {
      movie: state.movie.selected
    };
  };
  
  const mapDispatchToProps = {
    getMovie
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(MoviePage)
  );
  