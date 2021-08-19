//import files
import React from 'react'
//import style files
import 'css/index.css'
import 'css/reset.css'
import 'css/medium.css'
import 'css/large.css'
import 'css/extralarge.css'
import Toy from 'components/Toy.js'

const ToyList = ({ products }) => {

	//creates an array of toys by pulling the data from firebase
	let toyArray = products.map(({ id, img, name, price, desc, age }) =>
	<Toy key={id} id={id} img={img} name={name} price={price} desc={desc} age={age} />)

	//returns an array of toys to output
	return (	
		<section className="toyList">
    		<h2 className="subheading">Results</h2>
			{toyArray}
		</section>
	)
}

export default ToyList