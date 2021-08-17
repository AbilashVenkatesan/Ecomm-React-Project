import React from 'react'
const Filters = () => {


  // filter-form
  return (
    <form className="filters">
    <h2>Filters</h2>

    <div className="filter-options">
      {/* filter-options for age */}
      <fieldset>
        <legend className="filtertype">Age</legend>
        <ul className="filter-list">
          <li><input type="checkbox" name="age" value="toddler" id="toddler"/> <label htmlFor="toddler">Toddler</label></li>
          <li><input type="checkbox" name="age" value="child" id="child"/> <label htmlFor="child">Child</label></li>
          <li><input type="checkbox" name="age" value="kids" id="kids"/> <label htmlFor="kids">Kids</label></li>
          <li><input type="checkbox" name="age" value="teen" id="teen"/> <label htmlFor="teens">Teens</label></li>
        </ul>
      </fieldset>

      {/* filter-options for color */}
      <fieldset>
        <legend className="filtertype">Color</legend>
        <ol className="filter-list">
          <li><input type="checkbox" name="color" value="black" id="black"/> <label htmlFor="black">Black</label></li>
          <li><input type="checkbox" name="color" value="white" id="white"/> <label htmlFor="white">White</label></li>
          <li><input type="checkbox" name="color" value="yellow" id="yellow"/> <label htmlFor="yellow">Yellow</label></li>
          <li><input type="checkbox" name="color" value="pink" id="pink"/> <label htmlFor="pink">Pink</label></li>
          <li><input type="checkbox" name="color" value="blue" id="blue"/> <label htmlFor="blue">Blue</label></li>
        </ol>
      </fieldset>

      {/* filter-options for ratings */}
      <fieldset>
        <legend className="filtertype">Ratings: </legend>
        <ol className="filter-list">
          {/*4 star */}
          <li>
            <input type="radio" name="rating" value="4" id="aboveFour"/>
            <label htmlFor="aboveFour">
              <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
            </label>
          </li>

          {/* 3 star */}
          <li>
            <input type="radio" name="rating" value="3" id="aboveThree"/>
            <label htmlFor="aboveThree">
              <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
            </label>
          </li>

          {/* 2 star */}
          <li>
            <input type="radio" name="rating" value="2" id="aboveTwo"/>
            <label htmlFor="aboveTwo">
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
            </label>
          </li>

          {/* 1 star */}
          <li>
            <input type="radio" name="rating" value="1" id="aboveOne"/>
            <label htmlFor="aboveOne">
              <span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
            </label>
          </li>
        </ol>
      </fieldset>
    </div>

    {/* sorting filter */}
    <fieldset>
      <label htmlFor="sort" className="filtertype">Sort</label>
      <select name="sort" id="sort">
        <option value="newest">Newest releases</option>
        <option value="price-high">Price: Highest to Lowest</option>
        <option value="price-low">Price: Lowest to Highest</option>
      </select>
    </fieldset>
  </form>
  )

}

export default Filters