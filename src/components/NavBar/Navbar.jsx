import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./navbar.css";

function Navitem({ children, href, pathname, currentPathname }) {
  return (
    <li
      className={`nav-item ${currentPathname === pathname ? "active" : ""}   `}
    >
      <Link href={href} className={`text-capitalize fw-bold nav-link  `}>
        {children}
      </Link>
    </li>
  );
}

function Navbar() {
  const pathname = usePathname();

  return (
    <nav id="navbar" className="navbar  fixed-top navbar-expand-lg bg-warning">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image
            alt="RAB-logo"
            src="/assets/images/RAB-logo.svg"
            width={40}
            height={32}
            loading="lazy"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=""></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav  column-gap-3">
            <Navitem href="/" pathname="/" currentPathname={pathname}>
              home
            </Navitem>
            <Navitem
              href="equipments"
              pathname="/equipments"
              currentPathname={pathname}
            >
              equipments
            </Navitem>
            <Navitem href="about" pathname="/about" currentPathname={pathname}>
              about
            </Navitem>
            <Navitem
              href="contact"
              pathname="/contact"
              currentPathname={pathname}
            >
              contact
            </Navitem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
