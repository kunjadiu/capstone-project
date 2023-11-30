/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
function FooterPanel() {
  return (
    <footer
      class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top "
      style={{marginLeft:'.5rem'}}>
      <div class="col mb-3">
        <a
          href="/"
          class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
        >
          <img src={logo} width={300 + "px"} style={{ marginTop: 1.5 + "rem" }} />
        </a>
        {/* <p class="text-body-secondary">© 2023</p> */}
      </div>

      <div class="col mb-3"></div>

      <div class="col mb-3">
        <h5>Navigation</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">
              Home
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/About" class="nav-link p-0 text-body-secondary">
              About
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/Menu" class="nav-link p-0 text-body-secondary">
              Menu
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/Reservations" class="nav-link p-0 text-body-secondary">
              Reservations
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/Order-Online" class="nav-link p-0 text-body-secondary">
              Order-Online
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/Login" class="nav-link p-0 text-body-secondary">
              Login
            </a>
          </li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5>Contact Us</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="tel:6474774787" class="nav-link p-0 text-body-secondary">
              +1 (647)477-4787
            </a>
          </li>
          <li class="nav-item mb-2">
            <a
              href="mailto:info@littleLemon.com"
              class="nav-link p-0 text-body-secondary"
            >
              info@littleLemon.com
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="" class="nav-link p-0 text-body-secondary">
              301 ,Markham Rd, Scarborough,M9R 6T3
            </a>
          </li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5>Social Media</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a
              href="https://www.instagram.com/"
              class="nav-link p-0 text-body-secondary"
            >
              <FontAwesomeIcon icon={faInstagram} fontSize={40 + "px"} />
            </a>
          </li>
          <li class="nav-item mb-2">
            <a
              href="https://www.linkdlin.com/"
              class="nav-link p-0 text-body-secondary"
            >
              <FontAwesomeIcon icon={faLinkedin} fontSize={40 + "px"} />
            </a>
          </li>
          <li class="nav-item mb-2">
            <a
              href="https://www.facebook.com/"
              class="nav-link p-0 text-body-secondary"
            >
              <FontAwesomeIcon icon={faFacebook} fontSize={40 + "px"} />
            </a>
          </li>
          <li class="nav-item mb-2">
            <a
              href="https://www.pinterest.com/"
              class="nav-link p-0 text-body-secondary"
            >
              <FontAwesomeIcon icon={faPinterest} fontSize={40 + "px"} />
            </a>
          </li>
          <li class="nav-item mb-2">
            <a
              href="https://www.tiktok.com/"
              class="nav-link p-0 text-body-secondary"
            >
              <FontAwesomeIcon icon={faTiktok}  fontSize={40 + "px"} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterPanel;
