import React from "react";

import Image from "next/image";
import style from "./cardEquipment.module.css";
function CardEquipment({ image, title, description, className }) {
  return (
    <div
      className={`${style.card} card text-bg-dark border-0 rounded-0 ${className} 
        `}
    >
      <Image
        className="card-img"
        src={image}
        alt="excavator"
        width={225}
        height={200}
      />
      <div className="card-img-overlay p-5 d-flex flex-column align-content-center">
        <h5 className="card-title display-5 fw-bold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default CardEquipment;
