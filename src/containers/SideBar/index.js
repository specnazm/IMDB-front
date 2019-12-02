import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { drawerHeader, drawerPaper } from '../../styles/SideBarStyle'
import Search from './Search';
import SearchResult from './SearchResult';
import messages from './messages';
import { FormattedMessage } from 'react-intl';


export default class SideBar extends Component {

    render() {
        return (   
            <Drawer
                style={drawerPaper}
                variant="persistent"
                anchor="left"
                open={this.props.open}
            >
            <div style={drawerHeader}> 
                <Typography variant="h6" noWrap>
                    <FormattedMessage {...messages.searchHeader} />
                </Typography>
                <IconButton onClick={this.props.handleClose}><ChevronLeftIcon /></IconButton>
            </div>
            <Divider />
            <Search />
            <SearchResult />
        </Drawer>
     );
    }   
}