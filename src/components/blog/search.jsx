import React from 'react'
import ReactDOM from 'react-dom'

const FilterBox = (props) => {
  return(
    <div className={`filter__box flex ${props.active ? 'filter__box__active' : ''}`} onClick={props.onclick}>
      {/* <i className='button__icon bx bxs-folder'></i> */}
      {props.name}
    </div>
  );
}

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.toggleCategorie = this.toggleCategorie.bind(this);
      this.state = {
        search: '',
        filterbox: false,
        categories: {
          "productivity": true,
          "studying": true,
          "entrepreneurship" : true,
          "money" : true
        }
      };
    }

    onSearchChange = (e) => {
      this.setState({
        search: e.target.value
      });
      console.log(this.state.search)
    }

    toggleCategorie = (e) => {
      let categorie = e.target.innerHTML
      let updatedState = this.state.categories
      updatedState[categorie] = !this.state.categories[categorie];
      this.setState(updatedState);
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
          <FilterBox name='productivity' active={this.state.categories.productivity} onclick={this.toggleCategorie}/>
          <FilterBox name='studying' active={this.state.categories.studying} onclick={this.toggleCategorie}/>
          <FilterBox name='entrepreneurship' active={this.state.categories.entrepreneurship} onclick={this.toggleCategorie}/>
          <FilterBox name='money' active={this.state.categories.money} onclick={this.toggleCategorie}/>
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

          <hr className='divider'/>
        </div>
      )};
  }
  
export default Search