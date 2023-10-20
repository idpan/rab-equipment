import React from "react";
import style from "./button.module.css";
function Button({ children, className }) {
  return (
    <div className={style.btn + " btn btn-warning mt-4 fw-bold " + className}>
      {children}
    </div>
  );
}

export default Button;
