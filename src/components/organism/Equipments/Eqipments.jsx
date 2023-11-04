import React from "react";
import style from "./equipments.module.css";
import Button from "../../Button/Button";
import CardEquipment from "../CardEquipment/CardEquipment";
function Eqipments() {
  return (
    <section className={`${style.equipments} pt-5 pt-lg-5 pb-5 `}>
      <div className="container ">
        <h2 className={`${style.heading} mb-5 mt-3 `}>
          <strong>WE SUPPLY</strong>
          <br /> Market leading technology
        </h2>

        <div className={`${style.wrapper}  mb-4 `}>
          <div
            className={`${style.content} d-flex  flex-nowrap column-gap-4  `}
          >
            <CardEquipment
              image="/assets/images/excavator.png"
              title="Excavator"
            />
            <CardEquipment
              image="/assets/images/dumb-truck.png"
              title="Dumb Truck"
            />
            <CardEquipment
              image="/assets/images/bulldozer.png"
              title="Bulldozer"
            />
            <CardEquipment
              className="me-3 me-lg-5"
              image="/assets/images/vibro-roller.png"
              title="Vibro Roller"
            />
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <Button>Discover More</Button>
      </div>
    </section>
  );
}

export default Eqipments;
