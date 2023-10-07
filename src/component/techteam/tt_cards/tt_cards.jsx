// TT_cards.js

import React from 'react';
import './style.css';

function TT_cards({ title, body, img, ids}) {
  const bgImageStyle = {
    backgroundImage: `url(${img})`, // Set the background image for the body
  };

  return (
  <div className="tt_card" id={ids}>
    <div className="title">
      {title}
    </div>
    <h3 className="body">
      {body}
    </h3>
    <img 
      src="https://assets.website-files.com/6266eeaffe48d61a4d9852b0/6401d900aa6ab99d2228fd4f_62151cc176b9b079ca1e89f1_folder%20hover%20out%201.svg" 
      loading="eager" 
      alt="" 
      className="imgw"
    />
  </div>
  );
}

export default TT_cards;
