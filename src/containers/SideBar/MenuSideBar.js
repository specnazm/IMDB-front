import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { drawerHeader, drawerPaper } from '../../styles/SideBarStyle'
import Search from './Search';
import AddIcon from '@material-ui/icons/Add';
import SearchResult from './SearchResult';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import CreateMovie from '../Dashboard/CreateMovie';


export default class MenuSideBar extends Component {

    constructor(props) {
        super(props);
        this.state = { openModal: false, OMDB: false };
    }

    handleOpen = (openOMDBForm) => {
       this.setState({ openModal: true, OMDB: openOMDBForm })
    };

    handleClose = () => {
        this.setState({ openModal: false })
    };
    render() {
        return (   
            <Drawer
                style={drawerPaper}
                variant="persistent"
                anchor="left"
                open={this.props.open}
            >
            <IconButton 
                style={{ justifyContent: 'flex-end',}}
                onClick={this.props.handleClose}><ChevronLeftIcon />
            </IconButton>
            <Divider />
            <div style={drawerHeader}> 
            <Typography variant="h6" noWrap>
                    <FormattedMessage {...messages.addMovie} />
            </Typography>
            <IconButton onClick={() => this.handleOpen(false)}><AddIcon /></IconButton>
            </div>
            <div style={drawerHeader}> 
            <Typography variant="h6" noWrap>
                    <FormattedMessage {...messages.addMovieOMDB} />
            </Typography>
            <IconButton onClick={() => this.handleOpen(true)}><AddIcon /></IconButton>
            <CreateMovie 
                open={this.state.openModal} 
                handleClose={this.handleClose}
                OMDB={this.state.OMDB}
            />
            </div>
            <Divider />
            <div style={drawerHeader}>
                <Typography variant="h6" noWrap>
                    <FormattedMessage {...messages.searchHeader} />
                </Typography>
            </div>
            <Divider />
            <Search />
            <SearchResult OMDB={this.state.OMDB}/>
        </Drawer>
     );
    }   
}