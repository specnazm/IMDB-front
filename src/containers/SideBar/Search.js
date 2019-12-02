import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import { drawerWidth } from '../../styles/SideBarStyle'
import debounce from 'lodash/debounce';
import { search, getGenres } from '../../store/actions/MovieActions';
import { PER_PAGE } from '../../utils/constants';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const searchInput = {
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: drawerWidth
}
const filter = {
  padding: '6px 0px',
  alignItems: 'center',
  width: drawerWidth / 2
}

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = { genreFilter: null, title: null }
  }
  
  componentDidMount(){
    this.props.getGenres();
  }

  onFilterChange(e) {
    this.setState({genreFilter: e.target.textContent || null});
    this.search();
  }

  onInputChange(e) {
    this.setState({title: e.target.value});
    this.search();
  }

  search = debounce(() => {
    this.props.search({perPage:PER_PAGE, title:this.state.title, genre: this.state.genreFilter});
  }, 750, {'maxWait': 1000  })

  render() {
    return (  
      <div> 
        <Paper component="form" style={searchInput} >
        <InputBase
          style={{flex: 1}}
          placeholder="Insert movie title"
          onChange={e => this.onInputChange(e)}
        />
        <IconButton style={{padding: 10}} onClick = {() => this.search()}><SearchIcon /></IconButton>
      </Paper>
      <Autocomplete 
        id="genre-combo-box"
        style={filter}
        options={this.props.genres}
        getOptionLabel={option => option.name}
        onChange={e => this.onFilterChange(e)}
        renderInput={params => (
        <TextField {...params} label="Choose genre" variant="outlined" fullWidth />
        )}/>
      </div>
     );
    }   
}

const mapStateToProps = state => {
  return {
    genres : state.search.genres 
  };
};

const mapDispatchToProps = {
  search, getGenres
};

export default (
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search) 
);