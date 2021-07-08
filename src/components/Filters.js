import React from 'react'
const Filters = () => {

  return (
    <div class="filter-options">
        <a><h2>Filter</h2></a>
        <fieldset className="search">
			<input type="search" name="search" id="filterResults" autocomplete="off" />
		</fieldset>

        <fieldset>
            <legend>For Age</legend>
            <ol class="filter-list">
              <li><input type="checkbox" name="age" value="2-5" id="2-5"> <label for="2-5">2-5</label></input></li>
              <li><input type="checkbox" name="age" value="5-8" id="5-8"> <label for="5-8">5-8</label></input></li>
              <li><input type="checkbox" name="age" value="8-12" id="8-12"> <label for="8-12">8-12</label></input></li>
              <li><input type="checkbox" name="age" value="12-15" id="12-15"> <label for="12-15">12-15</label></input></li>
              <li><input type="checkbox" name="age" value="15-18" id="15-18"> <label for="15-18">15-18</label></input></li>
              </ol>
          </fieldset>
          <fieldset>
            <legend>Colour</legend>
            <ul class="filter-list">
              <li><input type="checkbox" name="colour" value="black" id="black"> <label for="black">Black</label></input></li>
              <li><input type="checkbox" name="colour" value="white" id="white"> <label for="white">White</label></input></li>
              <li><input type="checkbox" name="colour" value="yellow" id="yellow"> <label for="yellow">Yellow</label></input></li>
              <li><input type="checkbox" name="colour" value="pink" id="pink"> <label for="pink">Pink</label></input></li>
              <li><input type="checkbox" name="colour" value="blue" id="blue"> <label for="blue">Blue</label></input></li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>Sizes</legend>
            <ol class="filter-list">
              <li><input type="checkbox" name="size" value="xs" id="xs"> <label for="xs">XS</label></input></li>
              <li><input type="checkbox" name="size" value="sm" id="sm"> <label for="sm">S</label></input></li>
              <li><input type="checkbox" name="size" value="md" id="md"> <label for="md">M</label></input></li>
              <li><input type="checkbox" name="size" value="lg" id="lg"> <label for="lg">L</label></input></li>
              <li><input type="checkbox" name="size" value="xl" id="xl"> <label for="xl">XL</label></input></li>
            </ol>
          </fieldset> 
          <fieldset>
            <legend>Ratings (above)</legend>
            <ol class="filter-list">
              <li>
                <input type="radio" name="rating" value="4" id="aboveFour">
                <label for="aboveFour">
                  <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span>
                </label>
                </input>
              </li>
              <li>
                <input type="radio" name="rating" value="3" id="aboveThree">
                <label for="aboveThree">
                  <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                </label>
                </input>
              </li>
              <li>
                <input type="radio" name="rating" value="2" id="aboveTwo">
                <label for="aboveTwo">
                  <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                </label>
                </input>
              </li>
              <li>
                <input type="radio" name="rating" value="1" id="aboveOne">
                <label for="aboveOne">
                  <span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                </label>
              </li>
            </ol>
          </fieldset>
        </div>
        <fieldset>
          <label for="sort">Show</label>
          <select name="sort" id="sort" class="sort">
            <option value="price-high">Price, highest to lowest</option>
            <option value="price-low">Price, lowest to highest</option>
            <option value="newest">Newest releases</option>
            <option value="newest">Trending</option>
          </select>
        </fieldset>
      </form>
    </div>
    
    )
  }

  export default Filters