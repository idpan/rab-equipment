import React from "react";
import style from "./container.module.css";
function Container({ children, className, collapseTo }) {
  if (collapseTo == "left") {
    return (
      <div
        className={`${style.container_left} ${style.container}  ${className}`}
      >
        {children}
      </div>
    );
  }
  if (collapseTo == "right") {
    return (
      <div
        className={`${style.container_right} ${style.container} ${className}`}
      >
        {children}
      </div>
    );
  }
  return <div className={`${style.container} ${className}`}>{children}</div>;
}

export default Container;
