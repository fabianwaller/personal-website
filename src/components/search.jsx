import React from 'react'
import ReactDOM from 'react-dom'

const FilterBox = (props) => {
  return(
    <div className="filter__box flex">
      {/* <i className='button__icon bx bxs-folder'></i> */}
      {props.name}
    </div>
  );
}

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.state = {
        search: '',
        filterbox: false
      };
    }

    onSearchChange = (e) => {
      this.setState({
        search: e.target.value
      });
      console.log(this.state.search)
    }

    toggleFilterbox = () => {
      this.setState({
        filterbox: !this.state.filterbox
      });
    }
  
    render () {
      let filter;
      if (this.state.filterbox) filter = (
        <div className="filter">
          <FilterBox name='producvtivity'/>
          <FilterBox name='studying'/>
          <FilterBox name='entrepreneurship'/>
          <FilterBox name='money'/>
        </div>
      )
      return (
        <div className="search grid">
          <div className="search__bar form__content">
              <input type="text" id="search" name="search" value={this.state.search} onChange={this.onSearchChange} className="form__input" placeholder=" "/>
              <label htmlFor="search" className='form__label'><i className='bx bx-search'></i>Search</label>
              
              <i className='search__filter bx bx-filter' onClick={this.toggleFilterbox}></i>
          </div>


          {filter}
        </div>
      )};
  }
  
export default Search