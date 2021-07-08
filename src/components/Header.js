import React from 'react';
import logo from 'img/e-comm logo.jpg'
import menu from 'img/menu-button.jpg'

const Header = () => {

    return (
        <header id="header" className="page-header">
			<div className="logo">
				<a href="index.html"> <img src={logo} alt="logo" width="100" /></a>
			</div>

			<nav aria-label="Primary" className="navigation">
				<div className="menu-toggle">
					<a href="#"><img src={menu} alt="toggle-button" width="15" /></a>
				</div>
				<ul className="menu">
					<li><a href="index.html">Home</a></li>
					<li><a href="#">Shop</a>
						<ul className="sub-menu">
							<li><a href="general toys">General Toys</a></li>
							<li><a href="boys">For Boys</a></li>
							<li><a href="girls">For Girls</a></li>
							<li><a href="#">Sale</a></li>
						</ul>
					</li>
					<li><a href="about us">About Us</a></li>
					<li><a href="contact us">Contact Us</a></li>
				</ul>
			</nav>
		
			<ul className="your-products">
				<li className="wishlist"><a href="#" className="fav"><span className="material-icons" aria-label="Favourites">Wishlist</span></a></li>
				<li className="your-cart"><a href="#" className="bag"><span className="material-icons" aria-label="Add to bag">Your Cart</span><span>0</span></a></li>
			</ul>
		</header>
	)
}

export default Header