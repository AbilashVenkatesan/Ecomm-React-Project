import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="about us">
                <h1 id="about us">About Us</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis molestias magni corrupti quam consequatur delectus est ex non dolor laudantium dicta asperiores quis eveniet nobis, cumque eius quidem iusto?<br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, maiores? Cupiditate soluta, veritatis fuga eligendi, omnis consequatur deleniti rem beatae non dolor ipsum consectetur, culpa placeat. Impedit excepturi alias dolor!/</br></p>
            </div>

            <ul id="contact" class="social">
                <li><a href="#" class="footer-link"><span class="material-icons">face</span>Facebook</a></li>
                <li><a href="#" class="footer-link"><span class="material-icons">camera_alt</span>Instagram</a></li>
                <li><a href="#" class="footer-link"><span class="material-icons">alternate_email</span>Twitter</a></li>
            </ul>

            <nav aria-label="Legal">
                <ul class="legal">
                    <li><a href="#" class="footer-link">Terms of Use</a></li>
                    <li><a href="#" class="footer-link">Privacy Policy</a></li>
                    <li><a href="#" class="footer-link">Accessibility Policy</a></li>
                </ul>
            </nav>

            <p class="copyright">&copy; Copyright, 1991.</p>
        </footer>
	)
}

export default Footer