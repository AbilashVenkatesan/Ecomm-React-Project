//import files
import React, {useContext} from 'react'
import 'css/index.css'
import 'css/reset.css'
import {useParams} from 'react-router-dom'
import Toy from 'components/Toy'
import ProductContext from 'contexts/product'

const ToyPage = () => {

  //Gets dynamic id
  const toyId = useParams().id
  const toys = useContext(ProductContext)

  //pulls the data from Toy using the id
  const toy = toys.find((singleToy) => singleToy.id == toyId)

  //returns all the toys data to output
  return (
    <main style={{width: "100em", margin: "center" }} className="main">
      {/* assigns relative data values */}
      <Toy key={toy.id} id={toy.id} img={toy.img} name={toy.name} price={toy.price} desc={toy.desc} age={toy.age} />
      {/* back button redirecting to homepage */}
      <a href="/#" className="link" className="my-btn">Back to home</a>
    </main>
  )
}

export default ToyPage