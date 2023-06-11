import React, {useState, useEffect}  from 'react'
import { InputField } from '../InputField';
import Dropdown from '../Dropdown/Dropdown';
import "../CheckHowMuch/CheckHowMuch.css";
import Aos from 'aos';
import 'aos/dist/aos.css';


export const CheckHowMuch = () => {
      // code for animation starts
      useEffect(() => {
        Aos.init({
        // duration: 1000,
        // once: true,
        easing: "ease",
        delay: "300",
        mirror: true,
        });
    }, []);
  // code for animation ends
  const options = ['TH/s', 'H/s', 'KH/s', 'MH/s', 'GH/s'];
  return (
    <>
        <section className='CheckHowMuch'>
            <div className='CheckHowMuchContainer'>
                <div className='CheckHowMuchBox1'>
                  <div data-aos="fade-up" data-aos-duration="2000" className='textBox'>
                    <h3>Check how much you can earn</h3>
                    <p>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay= "500" data-aos-duration= "4000" className='RevenueCalculatorCard'>
                  <div className='top'>
                    <InputField placeholder = "Enter your hash rate" />
                    <Dropdown  options={options} />
                    <button style={{fontSize: "inherit"}}>Calculate</button>
                  </div>
                  <div className='bottom'>
                    <span> <p style={{color: "#3671E9", fontWeight: "bold"}}>ESTIMATED 24 HOUR REVENUE:</p> </span>
                    <span style={{display: "flex", flexDirection: "row", fontWeight: "bold"}}> 
                      <p style={{margin: 0}}>0.05513059 ETH</p> 
                      <p style={{color: "#3671E9", margin: "0 2%"}}>($1275)</p>
                    </span>
                    <span> <p style={{color: "#828282"}}>Revenue will change based on mining difficulty and Ethereum price.</p> </span>
                  </div>

                </div>
                <div className='CheckHowMuchBox2'>
                </div>
            </div>
        </section>
    </>
  )
}
