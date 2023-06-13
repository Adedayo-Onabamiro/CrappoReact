import React,{useState, useEffect}  from 'react'
import { Card } from '../Card/Card'
import "../TradeSecurely/TradeSecurely.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { CircleButton } from '../CircleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const TradeSecurely = () => {
        const hoveredButton = <button style={{display: "flex", justifyContent: "center", alignItems : "center", textAlign: "center"}}> <p> Start mining</p> <div> <FontAwesomeIcon style={{padding: "0 5"}} icon={faArrowRight} /> </div> </button>
        const initialButton = <CircleButton />

          // code for animation starts
          useEffect(() => {
            Aos.init({
            easing: "ease",
            delay: "300",
            mirror: true,
            });
        }, []);
      // code for animation ends
  return (
    <>
        <section className='TradeSecurely'>
            <div className='TradeSecurelyContainer'>
                <h1 data-aos="zoom-in" data-aos-duration="2000">Trade securely and market the high growth cryptocurrencies.</h1>
                <div className='CardContainer'>
                    <Card 
                        threecolor = "white"
                        image = "../images/logos_bitcoin.png"
                        coinName = "Bitcoin"
                        coinAbbv = "BTC"
                        coinStory = "Digital currency in which a record of transactions is maintained."
                        button={{ initial: initialButton, hovered: hoveredButton }} 
                    ></Card>
                    <Card
                        threecolor = "black"
                        image = "../images/ethicon.png"
                        coinName = "Ethereum"
                        coinAbbv = "ETH"
                        coinStory = "Blockchain technology to create and run decentralized digital applications."
                        button={{ initial: initialButton, hovered: hoveredButton }} 
                    ></Card>
                    <Card 
                        threecolor = "black"
                        image = "../images/liteicon.png"   
                        coinName = "Litecoin"
                        coinAbbv = "LTC"
                        coinStory = "Cryptocurrency that enables instant payments to anyone in the world." 
                        button={{ initial: initialButton, hovered: hoveredButton }} 
                    ></Card>
                </div>
            </div>
        </section>
    </>
  )
}
