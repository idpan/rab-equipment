import CTA from "@/components/organism/CTA/CTA";
import CardEquipment from "@/components/organism/CardEquipment/CardEquipment";
import HeroWithoutCTA from "@/components/organism/HeroWithoutCTA/HeroWithoutCTA";
function Equipments() {
  return (
    <>
      <section className="pt-5 pb-5 mb-5">
        <HeroWithoutCTA
          title="Our Equipments"
          description="We supply machines from world-leading construction equipment companies, built for work in the world’s toughest environments."
        />
        <div className=" mt-5 ">
          <div className="container-lg  d-flex flex-column align-items-center justify-content-center flex-lg-row mt-5 pt-5 gap-5 flex-wrap ">
            <CardEquipment
              image="/assets/images/mini-excavator.jpg"
              title="Mini-Excavator"
              description="Lorem ipsum dolor sit amet consectetur. Neque eu pharetra elit tempor. Venenatis duis platea ut in lectus"
            />
            <CardEquipment
              image="/assets/images/long-arm-excavator.jpg"
              title="Long Arm Excavator"
              description="Lorem ipsum dolor sit amet consectetur. Neque eu pharetra elit tempor. Venenatis duis platea ut in lectus"
            />
            <CardEquipment
              image="/assets/images/excavator.png"
              title="Excavator"
              description="Lorem ipsum dolor sit amet consectetur. Neque eu pharetra elit tempor. Venenatis duis platea ut in lectus"
            />
            <CardEquipment
              image="/assets/images/breaker-excavator.jpg"
              title="Breaker Excavator"
              description="Lorem ipsum dolor sit amet consectetur. Neque eu pharetra elit tempor. Venenatis duis platea ut in lectus"
            />
            <CardEquipment
              image="/assets/images/vibro-roller.png"
              title="Vibro Roller"
              description="Lorem ipsum dolor sit amet consectetur. Neque eu pharetra elit tempor. Venenatis duis platea ut in lectus"
            />
            <CardEquipment
              image="/assets/images/bulldozer.png"
              title="Bulldozer"
              description="Lorem ipsum dolor sit amet consectetur. Neque eu pharetra elit tempor. Venenatis duis platea ut in lectus"
            />
            <CardEquipment
              image="/assets/images/dumb-truck.png"
              title="Dumb Truck"
              description="Lorem ipsum dolor sit amet consectetur. Neque eu pharetra elit tempor. Venenatis duis platea ut in lectus"
            />
            <CardEquipment
              image="/assets/images/wheel-loader.jpg"
              title="Wheel Loader"
              description="Lorem ipsum dolor sit amet consectetur. Neque eu pharetra elit tempor. Venenatis duis platea ut in lectus"
            />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export default Equipments;
