//import files
import React from 'react'
//import style files
import 'css/index.css'
import 'css/reset.css'
import 'css/medium.css'
import 'css/large.css'
import 'css/extralarge.css'
import {Link} from 'react-router-dom'
//import img
import Error from '../img/404.png'

//returns this page when error 404 happens
const Page404 = () => {
  return (
    <div style={{textAlign: "center", width: "70vw", margin: "auto"}}>
      <h2>The page you are looking for doesn't exist.</h2>
      <Link to="/"><p>Go back.</p></Link>
	  <img style={{width: "50em", padding: "10em", margin: "center" }} alt={"404"}src={Error} />
	  </div>
  )
}

export default Page404