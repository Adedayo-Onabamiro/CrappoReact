import React from 'react'
import { InputField } from './InputField'

export const StartMining = () => {
  return (
    <>
        <section className='StartMining'>
            <div className='StartMiningContainer'>
                <div className='StartMiningBox1'>
                </div>
                <div className='middleContainer'>
                    <div className='left'>
                    <img className='a' src="../images/Vector (1).png"></img>
                        <h1 style={{fontWeight: "900"}}>Start mining now</h1>
                        <p>Join now with CRAPPO to get the latest news and start mining now</p>
                    </div>
                    <div className='right'>
                        {/* <div className='inputField'> */}
                        <InputField placeholder = "Enter your email" />
                        {/* </div> */}
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
