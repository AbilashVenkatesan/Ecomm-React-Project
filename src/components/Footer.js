//import file
import React from 'react'
import 'css/index.css'
import 'css/reset.css'

const Footer = () => {
    //returns the footer of the webstore
    return (
        <footer className="page-footer">
            <div className="aboutUs">
                <h1 id="about-us">About Us</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis molestias magni corrupti quam consequatur delectus est ex non dolor laudantium dicta asperiores quis eveniet nobis, cumque eius quidem iusto?
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, maiores? Cupiditate soluta, veritatis fuga eligendi, omnis consequatur deleniti rem beatae non dolor ipsum consectetur, culpa placeat. Impedit excepturi alias dolor!/</p>
            </div>

            {/* social links */}
            <ul id="contact-us" className="social">
                <li><a href="#" className="footer-link"><img src='src/img/fb.png' alt="facebook icon" width="15"></img>Facebook</a></li>
                <li><a href="#" className="footer-link"><img src='src/img/insta.png' alt="instagram icon" width="15"></img>Instagram</a></li>
                <li><a href="#" className="footer-link"><img src='src/img/twitter.png' alt="twitter icon" width="15"></img>Twitter</a></li>
            </ul>

            {/* legal links */}
            <nav aria-label="Legal">
                <ul className="legal">
                    <li><a href="#" className="footer-link">Terms of Use</a></li>
                    <li><a href="#" className="footer-link">Privacy Policy</a></li>
                    <li><a href="#" className="footer-link">Accessibility Policy</a></li>
                </ul>
            </nav>
            {/* copyright */}
            <p className="copyright">&copy; Copyright, 1991.</p>
        </footer>
	)
}

export default Footer