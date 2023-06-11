import React, {useEffect} from 'react'
import "../GrowProfit/GrowProfit.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

export const GrowProfit = () => {
      // code for animation starts
      useEffect(() => {
        Aos.init({
        duration: 2000,
        // once: true,
        easing: "ease",
        delay: "300",
        mirror: true,
        });
    }, []);
    // code for animation ends
  return (
    <>
        <section className='GrowProfit'>
            <div className='GrowProfitContainer'>
                <div className='right'>
                    <h1 data-aos="fade-in" className='GrowProfitH1' style={{fontWeight: "900"}}>Grow your profit and track your investments</h1>
                    <p data-aos="fade-in" className='GrowProfitP' style={{color: "#E0E0E0"}}>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
                        
                    </p>
                    <button data-aos="zoom-in-right" data-aos-delay= "400">Learn More</button>
                </div>
                <div data-aos="zoom-in" data-aos-delay= "400"  className='left'> <img src='../images/Table.png'/> </div>
            </div>
        </section>
    </>
  )
}
