import React from 'react'
import { Card } from './Card'

export const TradeSecurely = () => {
  return (
    <>
        <section className='TradeSecurely'>
            <div className='TradeSecurelyContainer'>
                <h1>Trade securely and market the high growth cryptocurrencies.</h1>
                <div className='CardContainer'>
                    <Card 
                        threecolor = "white"
                        image = "../images/logos_bitcoin.png"
                        coinName = "Bitcoin"
                        coinAbbv = "BTC"
                        coinStory = "Digital currency in which a record of transactions is maintained."
                        button = {<button> <p> Start mining</p> <div> ➡️ </div> </button>}
                    ></Card>
                    <Card
                        threecolor = "black"
                        image = "../images/ethicon.png"
                        coinName = "Ethereum"
                        coinAbbv = "ETH"
                        coinStory = "Blockchain technology to create and run decentralized digital applications."
                        button = {<button className='circleButton'>  <div> ➡️ </div> </button>}   
                    ></Card>
                    <Card 
                        threecolor = "black"
                        image = "../images/liteicon.png"   
                        coinName = "Litecoin"
                        coinAbbv = "LTC"
                        coinStory = "Cryptocurrency that enables instant payments to anyone in the world." 
                        button = {<button className='circleButton'>  <div> ➡️ </div> </button>}  
                    ></Card>
                </div>
            </div>
        </section>
    </>
  )
}
