import React from "react";
import style from "./cta.module.css";
import ButtonContact from "@/components/ButtonContact/ButtonContact";
function CTA() {
  return (
    <section className={`${style.cta} pt-5 pb-5 `}>
      <div className="container">
        <div className="row justify-content-lg-between align-items-lg-center ">
          <div className="col-lg-8 mb-3">
            <h2 className="fs-1">
              <strong>We deliver</strong> <br />
              The right solution for your business
            </h2>
            <p>
              Take the stress and hassle out of managing site equipment on a
              day-to-day basis. Get well specified and reliable equipment with
              service you can trust from people who care.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end   ">
            <ButtonContact>talk to our expert &raquo; </ButtonContact>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
