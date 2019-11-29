import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import { drawerWidth } from '../../styles/SideBarStyle'


const root = {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: drawerWidth
}

export default class Search extends Component {
    
    render() {
        return (   
            <Paper component="form" style={root}>
            <InputBase
              style={{flex: 1}}
              placeholder="Insert movie title"
              onChange={()=> console.log('da')}
            />
             <IconButton style={{padding: 10}} aria-label="menu">
              <SearchIcon />
            </IconButton>
          </Paper>
     );
    }   
}
