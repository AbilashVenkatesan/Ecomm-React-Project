//import file
import React from 'react'
//import style files
import 'css/index.css'
import 'css/reset.css'
import 'css/medium.css'
import 'css/large.css'
import 'css/extralarge.css'
import Facebook from '../img/fb.png'
import Insta from '../img/insta.png'
import Twitter from '../img/twitter.png'

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
                <li><a href="#" className="footer-link"><img alt={"fb"}src={Facebook} />Facebook</a></li>
                <li><a href="#" className="footer-link"><img alt={"isnta"}src={Insta} />Instagram</a></li>
                <li><a href="#" className="footer-link"><img alt={"twitter"}src={Twitter} />Twitter</a></li>
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