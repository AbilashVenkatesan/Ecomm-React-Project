import React from 'react'
import 'css/index.css'
import 'css/reset.css'
import {Link} from 'react-router-dom'
import Error from '../img/404.png'

//returns this page when error 404 happens
const Page404 = () => {
  return (
    <div style={{textAlign: "center", width: "70vw", margin: "auto"}}>
      <h2>The page you are looking for doesn't exist.</h2>
      <Link to="/"><p>Go back.</p></Link>
	  <img alt={"404"}src={Error} />
	  </div>
  )
}

export default Page404