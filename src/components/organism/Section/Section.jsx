import React from "react";

function Section({ children, className, title }) {
  return (
    <section className={`pt-5 pb-5 ${className} `}>
      <div className="container">
        <h2 className="text-center mb-5 text-capitalize">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
