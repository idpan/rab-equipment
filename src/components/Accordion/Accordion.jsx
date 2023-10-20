import React from "react";
import "./accordion.css";
function Accordion({ title, body, id }) {
  const faqInfo = [
    {
      title: "What industry sectors can use this service ?",
      body: "RAB serves any type of industry on any scale. We are ready to serve the various needs of heavy equipment in your project",
    },
    {
      title: "What is the minimum period for renting heavy equipment?",
      body: "For short-term rentals minimum 50 hours and For long-term rental minimum 1 month",
    },
    {
      title:
        "If the machine has serious problems, will you get a replacement machine ?",
      body: "A replacement vehicle will be provided if the estimated vehicle repair takes more than 2 x 24 hours.",
    },
    {
      title: "How much does it cost to rent heavy equipment ?",
      body: "The rental price depends on the type of heavy equipment, year of the unit, attachments used, amount rented, length of rental, and whether or not the operator & fuel are included. For more details, please contact our sales team.",
    },
    {
      title: "What types of heavy equipment does the RAB have?",
      body: "We provide rental of Excavators, Dozers, Vibros, Wheel Loaders and Forklifts of various sizes that can be adjusted to your needs.",
    },
  ];
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {faqInfo.map((faq, index) => {
        return (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse-${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse-${index}`}
              >
                {faq.title}
              </button>
            </h2>
            <div
              id={`flush-collapse-${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{faq.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
