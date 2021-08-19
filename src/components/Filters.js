//import files
import React from 'react'
import 'css/index.css'
import 'css/reset.css'
//import searchicon png
import SearchIcon from '../img/search.png'

const Filters = ({filters, setFilters}) => {  

  //age filter
  const Handleage = (event) => {
    setFilters({
      ...filters,
      age: event.target.value
    })
  }

	return(

		<form className="filters">
        <h2>Filters</h2>
        <div className="filter-options">
          <fieldset>
            {/* search filter */}
            <legend>Search</legend>
            <input type="search" value={filters.query} onChange={(event)=>{
              setFilters({
                ...filters,
                query: event.target.value
              })
            }} />
            <button  className="searchIcon"><img alt={"search"}src={SearchIcon} /></button>
          </fieldset>

          {/* age filter */}
          <fieldset>
            <legend>Age</legend>
              <ul className="filter-list">
                <li><input type="radio" className="checkBoxStyle" name="age" value="all" id="all" onChange={Handleage} checked={(filters.age === `all`)}></input><label htmlFor="all"><span></span>All Age</label></li>
                <li><input type="radio" className="checkBoxStyle" name="age" value="toddler" id="toddler" onChange={Handleage}></input> <label htmlFor="toddler"><span></span>Toddler</label></li>
                <li><input type="radio" className="checkBoxStyle" name="age" value="child" id="child" onChange={Handleage}></input> <label htmlFor="child"><span></span>Child</label></li>
                <li><input type="radio" className="checkBoxStyle" name="age" value="kids" id="kids" onChange={Handleage}></input> <label htmlFor="kids"><span></span>Kids</label></li>
                <li><input type="radio" className="checkBoxStyle" name="age" value="teens" id="teens" onChange={Handleage}></input> <label htmlFor="teens"><span></span>Teens</label></li>
              </ul>
            </fieldset>
          </div>

          {/* sort filter */}
          <fieldset id="sortfield">
            <label htmlFor="sort">Sort by</label>
            <select name="sort" id="sort" defaultValue={filters.sortBy} onChange={(event)=> {
              console.log(event.target.value)
              setFilters({
                ...filters,  
                sortBy: event.target.value
              })
            }}>
            {/* sort by options */}
            <option value="none">-- Select --</option>
            <option value="lowest">Price - lower to higher</option>
            <option value="highest">Price - higher to lower</option>
            </select>
          </fieldset>
    </form>
	)}

export default Filters