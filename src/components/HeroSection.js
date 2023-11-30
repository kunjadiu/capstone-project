/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import garlicBreadLogo from "../images/garlicbread.jpg";

export default function HeroSection() {
  return (
    <div class="heroSection">
      <div class="container">
        <div class="HeroSection">
          <section id="content-hero-para">
            <p class="littleLemon">Little Lemon</p>
            <p class="chicago">Chicago</p>
            <p class="para-content">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a href="/Reservations">
              <button id="reserveTable"> Reserve a Table</button>
            </a>
          </section>
        </div>
        {/* <div id="content-hero-image"> */}
          <img
            src={garlicBreadLogo}
            id="content-hero-image-img"
            // style={{ borderRadius: 20, float: "right" }}
            // width={"100"}
            alt="A garlic Bread Image"
          />
      </div>
    </div>
  );
}
