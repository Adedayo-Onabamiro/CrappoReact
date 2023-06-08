import React from 'react'

export const ChooseCrappo = () => {
  return (
    <>
        <section className="ChooseCrappo" id="ChooseCrappo">
            <div className="ChooseCrappoContainer">
            <div className="ChooseCrappoBoxTop">
                <div className='StatBox'>
                    <div className='left'>
                            <img src='../images/chart.png'></img>
                    </div>
                    <div className='right'>
                        <span> <h3>$30B</h3> </span>
                        <span> <p>Digital Currency Exchanged</p> </span>
                    </div>
                </div>

                <div className='StatBox'>
                    <div className='left'>
                            <img src='../images/human.png'></img>
                    </div>
                    <div className='right'>
                        <span> <h3>10M+</h3> </span>
                        <span> <p>Trusted Wallets Investor</p> </span>
                    </div>
                </div>

                <div className='StatBox'>
                    <div className='left'>
                            <img src='../images/earth.png'></img>
                    </div>
                    <div className='right'>
                        <span> <h3>195</h3> </span>
                        <span> <p>Countries Supported</p> </span>
                    </div>
                </div>
            </div>
            <div className='ChooseCrappoBoxBottom'>
                <div className="ChooseCrappoBox1"> <img src="../images/illustrations.png"/> </div>
                <div className="ChooseCrappoBox2"> 
                    <div className='one'> <p>Why you should choose CRAPPO</p> </div>   
                    <div className='two'> <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p> </div>   
                    <div className='three'> <button> <p> Learn More </p> </button> </div>   
                </div>
            </div>
            </div>
        </section>
    </>
  )
}
