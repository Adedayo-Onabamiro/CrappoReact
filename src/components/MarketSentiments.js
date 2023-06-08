import React from 'react'

export const MarketSentiments = () => {
  return (
    <>
        <section className='MarketSentiments'>
            <div className='MarketSentimentsContainer'>
                <h3>Market sentiments, portfolio, and run the infrastructure of your choice</h3>
                
                <div className='MarketSentimentsBox'>
                    <div className='top'>
                        <div className="MarketSentimentsBox1"> 
                            <div className='one'> <p>Invest Smart</p> </div>   
                            <div className='two'> <p>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p> </div>   
                            <div className='three'> <button> <p> Learn More</p></button> </div>   
                        </div>
                        <div className="MarketSentimentsBox2">
                            <div className='miniChartBox'>
                                <div className='top' style={{display: "flex",alignItems: "center", width: "90%", }}>
                                    <div className='left' style={{width: "40%"}}>
                                        <div style={{height:"100%", display: "flex",justifyContent:"space-evenly", alignItems: "center" , flexDirection: "row"}}>
                                            <img style={{height: "50%",width: "30%",maxHeight: 50, maxWidth: 50, objectFit: "contain",marginRight: "5%"}} src="../images/logos_bitcoin.png" />
                                            <span style={{ width: "100%",display: "flex",alignItems:"flex-start",flexDirection: "column", padding: "0 5%"}}>
                                                <div className='two'> <span style={{flexDirection: 'row', display: "flex", justifyContent:"center", alignItems: "center"}}> <p style={{color:"white", fontWeight: "900", paddingRight: "10%", margin: 0}}>Bitcoin</p> <p style={{color: "#BDBDBD", fontWeight: "bold"}}>BTC</p> </span> </div>
                                                <p style={{color:"white", margin: 0, fontSize: ".9rem"}}>0.00080 BTC</p>
                                            </span>
                                        </div>
                                    </div>
                                    <span> <p style={{color: "#42FFFF"}}>+125%</p> </span>
                                </div>
                                <div className='bottom'><img src="../images/Group 111.png"/></div>
                            </div>
                        </div>
                    </div>

                    <div className='MSbottom'>
                        <div className='tradeIncreaseBox'>
                            <img style={{ width: "30%",height: "50%",maxHeight: 150, maxWidth: 150, objectFit: "contain"}} src='../images/Card bounce rate.png'/>
                            <img style={{ width: "30%",height: "50%",maxHeight: 200, maxWidth: 200, objectFit: "contain"}} src='../images/Card visits per day.png'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

