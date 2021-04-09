import React, { useState, useEffect } from 'react';
import { getProductById } from '../../axios';
// import Products from "../Products/Products"

const Product = (props) => {
    const [product, setProduct] = useState({})
    const productId = props.match.params.id

    useEffect( () => {
        const getProduct = async () => {
            const response = await getProductById(productId)
            console.log(response)
            setProduct(response)
        }
        getProduct()
    }, [productId])

    return (
        <section className="product">
            <h1> {product.title} </h1>
            <p> ${product.price} </p>
            {
                product.pictures && product.pictures.map((picture) => {
                    return <img src={picture.url} alt={picture.title} key={picture.id} />
                })
            }
        </section>
    );
}
 
export default Product;