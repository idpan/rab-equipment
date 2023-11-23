import React from "react";
import style from "./contact.module.css";
import Container from "@/components/Container/Container";
function Contact() {
  return (
    <div className={`${style.contact}  row `}>
      <Container
        collapseTo="left"
        className={`${style.contact_info} bg-danger col-lg-5 pb-5`}
      >
        <h1>Contact Us</h1>
        <p className={`${style.contact_desc}`}>
          Want to know more ? Call us, send an email, or fill out the contact
          form. We are here to help and are always happy to talk.
        </p>
        <div className=" mb-5 mt-lg-5 mt-5 ">
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
      </Container>

      <div
        collapseTo="right"
        className={`${style.form_contact} col-lg-4  pb-5  `}
      >
        <h2 className="mb-5">For general question and enquiries</h2>

        <form action="/contact" method="POST">
          <div className="mb-4">
            <label htmlFor="name" class="form-label mb-3">
              Name
            </label>
            <input
              autoComplete="false"
              type="email"
              name="name"
              required
              placeholder="your name here..."
              className="form-control border-top-0 border-end-0 border-start-0 rounded-0 shadow-none "
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" class="form-label mb-3">
              Company
            </label>
            <input
              type="company"
              name="company"
              required
              placeholder="your company name here..."
              className="form-control border-top-0 border-end-0 border-start-0 rounded-0  shadow-none"
              id="company"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" class="form-label mb-3 ">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your email here..."
              className="form-control border-top-0 border-end-0 border-start-0 rounded-0  shadow-none"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" class="form-label ">
              Message
            </label>
            <textarea
              className="form-control rounded-0  shadow-none "
              placeholder="Leave a message here..."
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary rounded-0">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
