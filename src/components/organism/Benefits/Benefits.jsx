import React from "react";
import style from "./benefits.module.css";
import Image from "next/image";

function Benefit({ title, description, image }) {
  return (
    <div className="col-lg text-center">
      <Image
        src={image}
        alt="benefit-image"
        width={64}
        height={64}
        loading="lazy"
        className="mb-3"
      />
      <p className={`${style.title} fw-bold`}>{title}</p>
      <p className={`${style.description}`}>{description} </p>
    </div>
  );
}

function Benefits() {
  return (
    <section className={`${style.benefits}`}>
      <div className="container ">
        <div className="row column-gap-5 row-gap-5 ">
          <Benefit
            image="/assets/images/equipment-icon.png"
            title="Cutting-Edge Equipment"
            description="Experience Excellence with Our State-of-the-Art Machinery. We constantly invest in the latest technology to ensure your projects run smoothly."
          />
          <Benefit
            image="/assets/images/save-money.png"
            title="Competitive Pricing and Payment Flexibility"
            description="Affordable Solutions with Flexible Payment Options. We believe in quality without breaking the bank. Our competitive pricing and flexible payment plans fit your needs"
          />
          <Benefit
            image="/assets/images/24-7.png"
            title="24/7 Customer Support"
            description="Around-the-Clock Assistance for Your Peace of Mind. Projects don't follow a schedule, and neither do we. Our customer support is here for you 24/7."
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
