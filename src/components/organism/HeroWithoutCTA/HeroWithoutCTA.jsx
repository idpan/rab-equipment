import React from "react";
import style from "./heroWithoutCTA.module.css";
function HeroWithoutCTA({ title, description }) {
  return (
    <div className={`${style.hero} position-relative `}>
      <div className="container d-flex align-items-end align-items-lg-center position-relative h-100 ">
        <div className=" pb-5 ">
          <h1 className="mb-4">{title}</h1>
          <p className="col-md-7 col-lg-6 ">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroWithoutCTA;
