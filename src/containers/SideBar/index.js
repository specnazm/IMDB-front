import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { drawerHeader, drawer } from '../../styles/SideBarStyle'
import messages from './messages';
import { getPopular } from '../../store/actions/MovieActions';
import { FormattedMessage } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { SINGLE_MOVIE_PAGE } from '../../routes';
import { connect } from 'react-redux';
import { POPULAR } from '../../utils/constants';


class SideBar extends Component {

    componentDidMount(){
        this.props.getPopular();
    }

    render() {
        const movies = this.props.type === POPULAR ? this.props.popular : this.props.related;
        return (   
            <Drawer
                style={drawer}
                variant="persistent"
                anchor="right"
                open={true}
            >
            <div style={drawerHeader}> 
                <Typography variant="h6" noWrap>
                    {this.props.type === POPULAR ? <FormattedMessage {...messages.popularMoviesHeader} /> :
                    <FormattedMessage {...messages.relatedMoviesHeader} /> }
                </Typography>
            </div>
            <Divider />
            <List>
            {movies.map( movie => (
            <ListItem key={movie.id}>
              <Link component={RouterLink} to={SINGLE_MOVIE_PAGE.replace(':id', movie.id)} variant="body2">
                {movie.title}
             </Link>
            </ListItem>
          ))}
            </List>
         </Drawer>
     );
    }   
}

const mapStateToProps = state => {
    return {
        popular : state.movie.popular,
        related : state.movie.related
    };
};
  
const mapDispatchToProps = {
    getPopular
};

export default (
connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar) 
);