import React from "react";
import { animated, interpolate } from "react-spring";
import '../styles/Card.css'

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { bio, name, age, pic} = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
        <div className="card">
          <img className="card_picture" src={pic} alt={name}></img>
          <h4 className="card_age">{age}</h4>
          <p className="card_bio">{bio}</p>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Card;