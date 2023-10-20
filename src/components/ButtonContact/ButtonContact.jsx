import React from "react";
import Link from "next/link";
import style from "./buttonContact.module.css";
function ButtonContact({ children, ...rest }) {
  return (
    <Link
      href="contact"
      {...rest}
      className={`${style.buttonContact} text-capitalize btn border-4  border-black rounded-0`}
    >
      {children}{" "}
    </Link>
  );
}

export default ButtonContact;
