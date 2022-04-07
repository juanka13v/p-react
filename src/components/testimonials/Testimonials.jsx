import React from "react";
import "./Testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            doloribus perspiciatis, iure quaerat eveniet quod molestias deleniti
            consequatur.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            doloribus perspiciatis, iure quaerat eveniet quod molestias deleniti
            consequatur.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            doloribus perspiciatis, iure quaerat eveniet quod molestias deleniti
            consequatur.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            doloribus perspiciatis, iure quaerat eveniet quod molestias deleniti
            consequatur.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
