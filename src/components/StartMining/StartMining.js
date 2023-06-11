import React, {useEffect} from 'react'
import { InputField } from '../InputField'
import "../StartMining/StartMining.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

export const StartMining = () => {
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
        <section className='StartMining'>
            <div className='StartMiningContainer'>
                <div className='StartMiningBox1'>
                </div>
                <div data-aos="zoom-in" data-aos-delay= "400" data-aos-duration= "4000"  className='middleContainer'>
                    <div className='left'>
                    <img className='a' src="../images/Vector (1).png"></img>
                        <h1 style={{fontWeight: "900"}}>Start mining now</h1>
                        <p>Join now with CRAPPO to get the latest news and start mining now</p>
                    </div>
                    <div className='right'>
                        <InputField placeholder = "Enter your email" />
                        <button style={{color:"black",backgroundColor: "white" }}>Subscribe</button>
                        <img className='b' src="../images/Vector.png"></img>
                    </div>
                </div>
                <div className='StartMiningBox2'>
                </div>
            </div>
        </section>
    </>
  )
}
