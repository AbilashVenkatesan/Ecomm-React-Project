import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="about us">
                <h1 id="about us">About Us</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis molestias magni corrupti quam consequatur delectus est ex non dolor laudantium dicta asperiores quis eveniet nobis, cumque eius quidem iusto?<br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, maiores? Cupiditate soluta, veritatis fuga eligendi, omnis consequatur deleniti rem beatae non dolor ipsum consectetur, culpa placeat. Impedit excepturi alias dolor!/</br></p>
            </div>

            <ul id="contact us" class="social">
                <li><a href="#" class="footer-link"><img src='src/img/facebook png.png' alt="facebook icon" width="15"></img>Facebook</a></li>
                <li><a href="#" class="footer-link"><img src='src/img/isntagram png.png' alt="instagram icon" width="15"></img>Instagram</a></li>
                <li><a href="#" class="footer-link"><img src='src/img/twitter png.png' alt="twitter icon" width="15"></img>Twitter</a></li>
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