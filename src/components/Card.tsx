import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Card.css";

const Card = ({ icon, header, content }) => {
  return (
    <div className="box">
      <div className="img_div">
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <div className="content">
        <p className="card_header">{header}</p>
        <p className="card_text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
