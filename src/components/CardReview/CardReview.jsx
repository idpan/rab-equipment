import Image from "next/image";
import React from "react";
import style from "./card.module.css";
function CardReview({ review, name, position, image }) {
  return (
    <div
      className="card border-dark border-3 rounded-0 pt-5 mb-5 mx-auto mx-lg-0  text-start"
      style={{ maxWidth: "18rem" }}
    >
      <div className={`${style.review} card-body mb-3`}>
        <p className="card-text">{review}</p>
      </div>
      <div
        className={` ${style.card_footer} card-footer  border-top-0 d-flex gap-3 align-items-center `}
      >
        <div className="rounded overflow-hidden ">
          <Image src={image} alt="customer" width={40} height={40} />
        </div>
        <div className="  ">
          <strong className="fw-bold ">{name}</strong>
          <p className="mb-0">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
