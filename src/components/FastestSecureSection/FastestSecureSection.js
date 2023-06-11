import React, {useEffect} from 'react'
import { CircleButton } from '../CircleButton'
import "../FastestSecureSection/FastestSecureSection.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

export const FastestSecureSection = () => {
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
        <section className="FastestSecure" id="FastestSecure">
            <div className="FastestSecureContainer">
                     <img className='a' src="../images/[].png"/>
                     <img className='b' src="../images/[] (1).png"/>
                <div className="FastestSecureBox1">
                      <div className='one'> <button style={{color: "#0D0D2B", fontWeight: "700"}}>75% SAVE</button> For the Black Friday weekend  </div>    
                    <div data-aos="zoom-out" className='two'> <p>Fastest & secure platform to invest in crypto</p> </div>   
                    <div data-aos="zoom-out" className='three'> <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p> </div>   
                    <div className='four'> <button> <p data-aos="fade-right" data-aos-delay= "800" data-aos-duration= "2800" > Try for FREE</p> <div data-aos="fade-right" data-aos-delay= "500" data-aos-duration= "3200"> ➡️ </div> </button> </div>   
                </div>
                <div data-aos="zoom-out" data-aos-delay= "400" data-aos-duration= "4000"  className="FastestSecureBox2"> <img src="../images/illustration.png"/> </div>
              </div>
        </section>
    </>
  )
}
