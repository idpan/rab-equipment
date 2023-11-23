import Image from "next/image";
import style from "./hero.module.css";
import Button from "../components/Button/Button";
import Benefits from "@/components/organism/Benefits/Benefits";
import About from "@/components/organism/About/About";
import Equipments from "@/components/organism/Equipments/Eqipments";
import Clients from "@/components/organism/Clients/Clients";
import CTA from "@/components/organism/CTA/CTA";
import Section from "@/components/organism/Section/Section";
import CardReview from "@/components/CardReview/CardReview";
import Accordion from "@/components/Accordion/Accordion";
export default function Home() {
  return (
    <>
      <section className={style.hero}>
        <div className="container pt-5 mt-5">
          <div className="row  mt-5">
            <div className="col-lg-8 col-sm-10">
              <h1 className={`${style.hero_heading} `}>
                Your Trusted Partner for Project Elevation
              </h1>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-sm-9 col-lg-6 col-xl-5 ">
              <p className={`${style.hero_description}  `}>
                We understand that every project comes with unique demands.
                That’s why we offer a variety of heavy equipment, so you can
                tailor your project perfecly
              </p>
              <Button>Discover More</Button>
            </div>
          </div>
        </div>
      </section>
      <Benefits />
      <About />
      <Equipments />
      <Clients />

      <Section className="reviews" title="What Our Customer Say">
        <div className=" d-lg-flex column-gap-5 justify-content-center pt-5">
          <CardReview
            review="RAB’s experience and breadth of knowledge meant they could match equipment to the constraints of our budget."
            name="Peter"
            position="Head Manager"
            image="/assets/images/customer/customer-1.png"
          />
          <CardReview
            review="Their knowledge and understanding of our industry reassured us that they could provide the level of service we require."
            name="James"
            position="Contractor"
            image="/assets/images/customer/customer-2.png"
          />
          <CardReview
            review="It was essential for our business to find a company who could minimise equipment downtime within our operation."
            name="Frank"
            position="Production Manager"
            image="/assets/images/customer/customer-3.png"
          />
        </div>
      </Section>
      <Section title="FAQ" className="faq ">
        <div className="row justify-content-center">
          <div className="col-lg-7 ">
            <Accordion></Accordion>
          </div>
        </div>
      </Section>
      <CTA />
    </>
  );
}
