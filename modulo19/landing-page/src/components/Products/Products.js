import React from "react"
import section3 from "../../assets/img/section3.png"
import arrowLeft from "../../assets/img/arrowLeft.svg"
import arrowRight from "../../assets/img/arrowRight.svg"

const Products = () => {
    return(
        <section id="products" className="products">
            <div className="products-content">
                <div className="products-card">
                    <div>
                        <h3 className="products-card-h3">Send ut perspiciatis</h3>
                        <h2>Nemo Enim</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div className="products-card-nav">
                        <a className="nav-left"><img src={arrowLeft} alt="arrow-left" /></a>
                        <a className="nav-right"><img src={arrowRight} alt="arrow-right" /></a>
                    </div>
                </div>
                <img src={section3} />
            </div>
        </section>
    )
}

export default Products