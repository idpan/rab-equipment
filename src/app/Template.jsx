"use client";
import React, { useEffect } from "react";
import Navbar from "../components/NavBar/Navbar";
import Image from "next/image";
import Link from "next/link";
import RabLogo from "/public/assets/images/RAB-logo.svg";
// import "./global.css";
import "./footer.css";
import CTA from "@/components/organism/CTA/CTA";
function Template({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>{children}</main>

      <footer>
        <div className="container pt-5 ">
          <div className="row mb-5  ">
            <div className="col-lg-3 mb-5 mt-lg-5">
              <RabLogo />
            </div>
            <div className="col-lg-3 mb-5 mt-lg-5 ">
              <div className="footer-info">
                <strong>Head Office</strong>
                <p>manggo street,12,New York</p>
              </div>
              <div className="footer-info">
                <strong>Phone</strong>
                <p>(021) 582-221-222</p>
              </div>
              <div className="footer-info">
                <strong>E-mail</strong>
                <p>rabemail.gmail.com</p>
              </div>
            </div>
            <div className="col-lg-3 mb-3 mt-lg-5 ">
              <strong>Heavy Equipment Rent</strong>
              <Link className="nav-link" href="equipments">
                Mini-Excavator
              </Link>
              <Link className="nav-link" href="equipments">
                Excavator
              </Link>
              <Link className="nav-link" href="equipments">
                Long Arm Excavator
              </Link>
              <Link className="nav-link" href="equipments">
                Breaker Excavator
              </Link>
              <Link className="nav-link" href="equipments">
                Bulldozer
              </Link>
              <Link className="nav-link" href="equipments">
                Vibro Roller
              </Link>
              <Link className="nav-link" href="equipments">
                Wheel Loader
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <p className="ms-4 pb-3 mb-0">
          made by <strong>idpan</strong>
        </p>
      </footer>
    </>
  );
}

export default Template;
