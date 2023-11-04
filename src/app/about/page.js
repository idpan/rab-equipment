import HeroWithoutCTA from "@/components/organism/HeroWithoutCTA/HeroWithoutCTA";
import React from "react";

function page() {
  return (
    <div className="pt-5">
      <HeroWithoutCTA
        title="About Us"
        description="We are an established family owned business, based in north-west Cumbria and supplying market leading construction equipment across the UK."
      />
      <div className="container mt-5 pt-3">
        <p>
          At Rental Alat Berat we've been building a reputation for unrivalled
          product knowledge and first-class service within the construction
          rental industry for over forty five years. From humble beginnings and
          a base in north-west Cumbria our company continues to grow and
          diversify. We currently manage a fleet of over 180 machines including
          dumptrucks (25–60 tonnes), loading shovels (16–36 tonnes), material
          handlers, excavators and tracked dozers. We also supply a full range
          of wear parts from brands such as MST and Blademaster.
        </p>
        <h2 className="mt-5">Our Experience</h2>
        <p>
          We've been supplying and maintaining machines in some of the world's
          toughest industrial and construction environments from the outset -
          moving and handling coal, salt, sand, stone, earth, biomass/woodchip,
          timber and waste. This extensive operational experience allows us to
          specify the right equipment for a wide range of sites, as well as
          recommend and implement bespoke solutions where they are needed. Once
          a machine is deployed our in-house service engineers carry out
          proactive maintenance and rigorous servicing, supported by the
          manufacturers' own field service teams, to ensure our entire fleet
          operates with minimal downtime.
        </p>
        <h2 className="mt-5">Our Value</h2>
        <p>
          Still a family owned and managed business, at SER we pride ourselves
          on always delivering outstanding service and value-for-money: we make
          the process of renting easier, quicker and more affordable for our
          customers. Contact our team today to discuss your equipment
          requirements and find the solution you need, whatever your business.
        </p>
      </div>
    </div>
  );
}

export default page;
