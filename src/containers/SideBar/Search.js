import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import { drawerWidth } from '../../styles/SideBarStyle'
import debounce from 'lodash/debounce';
import { search } from '../../store/actions/MovieActions';
import { PER_PAGE } from '../../utils/constants';

const root = {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: drawerWidth
}

class Search extends Component {
    
    search = debounce(value => {
        this.props.search(PER_PAGE, value);
      }, 750, {'maxWait': 1000  })

    render() {
        return (   
            <Paper component="form" style={root}>
            <InputBase
              style={{flex: 1}}
              placeholder="Insert movie title"
              onChange={ e => this.search(e.target.value)}
            />
             <IconButton style={{padding: 10}} >
              <SearchIcon />
            </IconButton>
          </Paper>
     );
    }   
}

const mapStateToProps = state => {
    return {
    };
  };
  
  const mapDispatchToProps = {
    search
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Search) );