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


class SideBar extends Component {

    componentDidMount(){
        this.props.getPopular();
    }

    render() {
        return (   
            <Drawer
                style={drawer}
                variant="persistent"
                anchor="right"
                open={true}
            >
            <div style={drawerHeader}> 
                <Typography variant="h6" noWrap>
                    <FormattedMessage {...messages.popularMoviesHeader} />
                </Typography>
            </div>
            <Divider />
            <List>
            {this.props.movies.map( movie => (
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
        movies : state.movie.popular
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