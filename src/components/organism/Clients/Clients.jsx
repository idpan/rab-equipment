import Image from "next/image";
import React from "react";
import style from "./clients.module.css";
import ascetLogo from "/public/assets/images/clients/acset-logo.png";
import adhiLogo from "/public/assets/images/clients/adhi-logo.png";
import decorientLogo from "/public/assets/images/clients/decorient-logo.png";
import fajarPaperLogo from "/public/assets/images/clients/fajar-paper.png";
import hkLogo from "/public/assets/images/clients/hk-logo.png";
import mrindaLogo from "/public/assets/images/clients/mrinda-logo.png";
import shimizuLogo from "/public/assets/images/clients/shimizu-logo.png";
import takenakaLogo from "/public/assets/images/clients/takenaka-logo.png";
import totalLogo from "/public/assets/images/clients/total-logo.png";
import waskitaLogo from "/public/assets/images/clients/waskita-logo.png";

function Clients() {
  return (
    <section className={`${style.clients} pt-5 pb-5 column-gap-5  `}>
      <h2 className="text-center">Trusted by</h2>
      <div className={`${style.clients_logo} py-5  `}>
        <Image alt="clients-logo" src={ascetLogo} />
        <Image alt="clients-logo" src={adhiLogo} />
        <Image alt="clients-logo" src={decorientLogo} />
        <Image alt="clients-logo" src={fajarPaperLogo} />
        <Image alt="clients-logo" src={hkLogo} />
        <Image alt="clients-logo" src={mrindaLogo} />
        <Image alt="clients-logo" src={shimizuLogo} />
        <Image alt="clients-logo" src={takenakaLogo} />
        <Image alt="clients-logo" src={totalLogo} />
        <Image alt="clients-logo" src={waskitaLogo} />
      </div>
      <div className={`${style.clients_logo} py-5  `}>
        <Image alt="clients-logo" src={ascetLogo} />
        <Image alt="clients-logo" src={adhiLogo} />
        <Image alt="clients-logo" src={decorientLogo} />
        <Image alt="clients-logo" src={fajarPaperLogo} />
        <Image alt="clients-logo" src={hkLogo} />
        <Image alt="clients-logo" src={mrindaLogo} />
        <Image alt="clients-logo" src={shimizuLogo} />
        <Image alt="clients-logo" src={takenakaLogo} />
        <Image alt="clients-logo" src={totalLogo} />
        <Image alt="clients-logo" src={waskitaLogo} />
      </div>
    </section>
  );
}

export default Clients;
