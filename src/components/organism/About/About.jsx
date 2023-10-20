import Image from "next/image";
import React from "react";
import style from "./about.module.css";
function About() {
  return (
    <>
      <section className={`${style.about} mb-5 mb-lg-0 `}>
        <div className="row   ">
          <div
            className={`
            col-lg-6 text-lg-end  
            ${style.left_container}
            `}
          >
            <h2
              className={`
              ${style.heading}
              >
            `}
            >
              <strong>RAB</strong>
              <br /> THE BEST HEAVY EQUIPMENT RENT SOLUTION
            </h2>
          </div>

          <div className={`${style.description} col-lg-4`}>
            <p>
              Rental Alat Berat (RAB) is a provider of heavy equipment rental
              services that is ready to help your construction and industrial
              projects succeed. Our heavy equipment has the best quality
              including Excavators, Vibro Rollers, Bulldozers, Wheel Loaders,
              Forklifts, Self Loader Trucks and other heavy equipment that you
              can rely on. No need to worry about running the heavy equipment
              you rent. Our trained and experienced operators are ready to
              operate heavy equipment safely and efficiently. In addition, we
              provide equipment mobilization and demobilization services to the
              project site.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
