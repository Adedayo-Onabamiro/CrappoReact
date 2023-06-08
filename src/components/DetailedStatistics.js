import React from 'react'

export const DetailedStatistics = () => {
  return (
    <>
        <section className='DetailedStatistics'>
            <div className='DetailedStatisticsContainer'>
                <div className='left'> <img src='../images/Statistic.png'/> </div>
                <div className='right'>
                    <h1>Detailed Statistics</h1>
                    <p style={{color: "#E0E0E0", fontSize: "1.1rem"}}>View all mining related information in realtime,
                         at any point at any location and decide which polls you want to mine in.
                    </p>
                    <button style={{fontSize: "1.2rem"}}>Learn More</button>
                </div>
            </div>
        </section>
    </>
  )
}
