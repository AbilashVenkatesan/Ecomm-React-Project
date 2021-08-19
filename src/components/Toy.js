//import files
import React from 'react'
//import style files
import 'css/index.css'
import 'css/reset.css'
import 'css/medium.css'
import 'css/large.css'
import 'css/extralarge.css'
import {Link} from 'react-router-dom'

const Toy = ({ id, img, name, price, desc, age}) => {

	//Gets the img from db
	const toyImg = require(`img/${img}`).default	

	//returns all data from db to output
	return (
		<div className="product">
			<header>
				{/* uses db reference to pull the img and returns to output */}
				<img className="img" src={toyImg} alt={name} id={id} />

				{/* pulls rest of the data and returns to output */}
				<div  className="prodHeader">
					<h3><Link to={`/product/${id}`} className="link">{name}</Link></h3>
					<data value={price}>${price}/-</data>
					<p>{desc}</p>
					<p><data value={age}>For: {age[0]}, {age[1]}, {age[2]} {age[3]}</data></p>	
					<button type="button" className="view-product"><Link to={`/product/${id}`} className="link">View Product</Link></button>
				</div>
			</header>

			<form>
				{/* displays color choices for user to pick from */}
				<div className="color-size">
					<fieldset>
						<legend>Color</legend>
						<ol>
							<li><label><input type="radio" name="color" value="red"></input> Red</label></li>
							<li><label><input type="radio" name="color" value="white"></input> White</label></li>
							<li><label><input type="radio" name="color" value="blue"></input> Blue</label></li>
						</ol>
					</fieldset>

					{/* displays size choices for user to pick from */}
					<fieldset>
						<legend>Size</legend>
							<ol>
								<li><label><input type="radio" name="size" value="S"></input> S</label></li>
								<li><label><input type="radio" name="size" value="M"></input> M</label></li>
								<li><label><input type="radio" name="size" value="L"></input> L</label></li>
							</ol>
					</fieldset>
				</div>
			</form>

			{/* footer section of the product */}
			<footer className="prodFooter">
				<button type="button" className="yourProduct"><a href="#" class="link"><span class="material-icons" aria-label="Favourites">favorite_border</span>Wishlist</a></button>
				<button type="button" className="yourProduct"><a href="#" class="link"><span class="material-icons" aria-label="Items in your cart">shopping_cart</span>Add to cart</a></button>
			</footer>
  		</div>
	)
}

export default Toy