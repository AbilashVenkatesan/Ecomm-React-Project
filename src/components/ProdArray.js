import React, {useState} from 'react'

const ProdArray = ({data}) => {
    const {toyImg,toyName,toyDescription,actualPrice,offerPrice} = data
    const [img, setImg] = useState(``)
    import (`img/${toyImg}`).then((image) => setImg(image.default))
    return (
        <article className="toy">
            <header>
                <div className="thumbnail">
                    <a href="product.html"><img src={img} alt={`{toyImg}`}/></a>
                </div>
                <h1><a href="product.html">{toyName}</a></h1>
                <h2>Description:</h2> 
                <p>{toyDescription}</p>
                <data value="39"><del>${actualPrice}</del> <ins>${offerPrice}</ins></data>
            </header>
            <footer>
                <button type="button" class="view-product"><a href="product.html">View Product</a></button>
                <button type="button" class="wishlist"><span class="material-icons" aria-label="Favourites"></span>Add to Wishlist</button>
                <button type="button" class="your-cart"><span class="material-icons" aria-label="Add to bag"></span>Add to Cart</button>
            </footer>   
        </article>
    )
}

export default ProdArray