import React from "react"
import FooterLogo from "../../assets/img/footer-logo.svg"

const Footer = () => {
    return(
        <section className="footer">
            <p className="footer-copyright">2020 © All rights reserved.</p> 
            <a href="#hero" className="footer-logo"><img src={ FooterLogo } alt="footer-logo" /></a>
        </section>
    )
}

export default Footer