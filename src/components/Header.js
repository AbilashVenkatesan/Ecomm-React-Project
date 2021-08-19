//import files
import React from 'react'
import 'css/index.css'
import 'css/reset.css'
//import img for logo
import Logo from '../img/logo.jpg'

const Header = () => {

	//return header section with logo, navigation button, wishlish and cart
	return(
	<header className="page-header">
			<a href="/#" className="logo"><img src={Logo} alt="logo" /></a>
	
			{/* <!-- menu button for small viewport --> */}
			<button type="button" className="nav-toggle">
			<span className="material-icons">menu</span>
			</button>
			{/* navigation bar */}
			<nav aria-label="Primary" className="navigation">
			<ul className="menu">
				<li><a href="/#" className="link"><p className="nav-btn">Home</p></a>
				<ul className="submenu">
					<li><a href="#" className="link"><p className="nav-btn">General</p></a></li>
					<li><a href="#" className="link"><p className="nav-btn">Boys</p></a></li>
					<li><a href="#" className="link"><p className="nav-btn">Girls</p></a></li>
				</ul>
				</li>
				<li><a href="#" className="link"><p className="nav-btn">About Us</p></a></li>
				<li><a href="#" className="link"><p className="nav-btn">Contact Us</p></a></li>
			</ul>
			</nav>
	
			{/* <!-- links to wishlist and cart --> */}
			<ul className="yourProducts">
			<li><a href="fav"><span className="material-icons" aria-label="Favourites">favorite_border</span>Wishlist</a></li>
			<li><a href="cart"><span className="material-icons" aria-label="Items in your cart">shopping_cart</span>Your cart</a></li>
			</ul>
		</header>
	)
}

export default Header