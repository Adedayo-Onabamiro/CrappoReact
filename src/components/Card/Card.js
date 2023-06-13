import React, { useState } from 'react';
import "../Card/Card.css";

export const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let image = props.image;
  let coinName = props.coinName;
  let coinAbbv = props.coinAbbv;
  let coinStory = props.coinStory;
  let button = props.button;

  return (
    <div className='Card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='one'> <img src={image}></img> </div>
      <div className='two'> <span style={{flexDirection: 'row', display: "flex", justifyContent:"center", alignItems: "center"}}> <p style={{fontSize: "1.6rem", fontWeight: "900", marginRight: "10%"}}>{coinName}</p> <p style={{color: "#BDBDBD", fontSize: "1.2rem", fontWeight: "bold"}}>{coinAbbv}</p> </span> </div>
      <div className='three' style={{fontSize: "1.3rem"}}> <p>{coinStory}</p> </div>
      <div className='four'>
        {isHovered ? button.hovered : button.initial}
      </div>
    </div>
  );
};
