import React, {useState, useEffect}  from 'react'
import "../DetailedStatistics/DetailedStatistics.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

export const DetailedStatistics = () => {
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
        <section className='DetailedStatistics'>
            <div className='DetailedStatisticsContainer'>
                <div data-aos="zoom-in" data-aos-delay= "400"  className='left'> <img src='../images/Statistic.png'/> </div>
                <div className='right'>
                    <h1 data-aos="fade-in" >Detailed Statistics</h1>
                    <p data-aos="fade-in"  style={{color: "#E0E0E0", fontSize: "1.1rem"}}>View all mining related information in realtime,
                         at any point at any location and decide which polls you want to mine in.
                    </p>
                    <button data-aos="zoom-in-left" data-aos-delay= "400" style={{fontSize: "1.2rem"}}>Learn More</button>
                </div>
            </div>
        </section>
    </>
  )
}
