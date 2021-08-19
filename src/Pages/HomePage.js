//import files
import React, {useContext, useEffect, useState} from 'react'
import 'css/index.css'
import 'css/reset.css'
import ProductContext from '../contexts/product'
import ToyList from 'components/ToyList'
import Filter from 'components/Filters'

//filter set-up in home page
const HomePage = () => {
	const products = useContext(ProductContext)
	const [productResult, setProductResult] = useState(products)

	//search filter
	const [filters, setFilters] = useState({
	  query: ``,
	  sortBy: `none`,
	  age: `all`
	})

	useEffect(() => {
	
		let filteredProducts = [...products]
	    //search-filter query
	    if (filters.query) {
	  	filteredProducts = filteredProducts.filter((prod) => prod.name.toLowerCase().includes(filters.query.toLowerCase().trim()))
		}

		if (filters.age !== `all`) {
			console.log("age = ", filters.age)
			function prodArr(arr) {
				return arr === filters.age
			}
			filteredProducts = filteredProducts.filter((prod) => prod.age.find(prodArr))
		}

	// sort-by filter
	setProductResult(filteredProducts)
		switch (filters.sortBy) {
			case `highest`:
		  	filteredProducts.sort((a, b) => b.price - a.price)
		  	break;
			case `lowest`:
		  	filteredProducts.sort((a, b) => a.price - b.price)
		  	break;
	    }
	}, [filters])

	//main page
	return (
		<div>
		<main className="products">
			 <header className="heading">
             	<h1 className="promo"><p>Summer Sale is live!!!!</p></h1>
             </header>
		 	<Filter filters={filters} setFilters={setFilters} />
		 	<ToyList style={{display: "grid;"}} products={productResult} />
		</main>

		<footer className="prodCount">
			<h2>{productResult.length} toy(s) found</h2>
		</footer>
		</div>	  
	)
  }

  export default HomePage