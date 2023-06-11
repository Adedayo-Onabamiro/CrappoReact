import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <>
        <section id="footer">
            <div className="footer_container">
                <div className="footer_link--wrapper">
                <div className='LogoBox'>
                    <div className='part1'> 
                        <img src="../images/Logo.png" />
                    </div>
                    <div className='part2'>Crappo</div>
                </div>

                    <div className="footer_link--itemsBox">
                        <div className="footer_link--items F1">
                            <a href="#" style={{ fontWeight: "600", marginBottom: "5%"}}> Home </a>
                            <a href="#"> Products </a>
                            <a href="#"> About </a>
                            <a href="#"> Features </a>
                            <a href="#"> Contact </a>
                        </div>
            
                        <div className="footer_link--items F2">
                            <a href="#" style={{ fontWeight: "600",  marginBottom: "5%"}}> Resources</a>
                            <a href="#"> Download Whitepaper </a>
                            <a href="#"> Smart Token </a>
                            <a href="#"> Blockchain Explorer </a>
                            <a href="#"> Crypto API </a>
                            <a href="#"> Interest </a>
                        </div>
            
                        <div className="footer_link--items F3">
                            <h2>We accept following payment systems</h2>
                            <div className='sponsorBox'>
                                <img src='../images/Visa.png' />
                                <img src='../images/logos_mastercard.png' />
                                <img src='../images/logos_bitcoinBlack.png' />
                            </div>
                        </div>
            
                    </div>
                </div>
                <div className='lastLine'>
                    <div className='left'> <p>©2021 CRAPPO. All rights reserved</p> </div>
                    <div className='right'>
                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                        <FontAwesomeIcon className='icon' icon={faYoutube} />
                        <FontAwesomeIcon className='icon' icon={faTwitter} />
                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                    </div>
                </div>
                    <p style={{color: "#3671E9", textAlign: "center"}}>Code by Uncle Bams.</p>
        </div>
        </section>
    </>
  )
}
