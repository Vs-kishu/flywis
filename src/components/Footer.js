import React from "react";
import { contact, footerLinks, paymentCards } from "../constants/constant";

const Footer = () => {
  return (
    <section className="bg-color text-white py-5 position-relative">
      <div className="d-flex justify-content-between px-5 ">
        <div className="d-flex flex-column gap-1 align-items-center justify-content-center">
          <span className="fs-5 f-w">FOLLOW US</span>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <img
              src="/asessts/footer/instagram.png"
              className="w-25  img-fluid"
              alt="instagram"
            />
            <img
              src="/asessts/footer/facebook.png"
              className="w-25  img-fluid"
              alt="facebook"
            />
          </div>
        </div>
        <div>
          <img
            src="/asessts/navbar/logo.png"
            className="img-fluid"
            alt="logo"
          />
        </div>
        <div className="d-flex flex-column gap-1 justify-content-center">
          <span className="fs-5 f-w">WE ACCEPT</span>
          <div className="d-flex gap-1">
            {paymentCards.map((src, index) => (
              <div key={index}>
                <img src={src} alt="card" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex gap-5 position-relative">
        <div
          className="d-flex  justify-content-between  mt-5 ms-4"
          style={{ width: "60%" }}
        >
          {footerLinks.map((item, index) => (
            <div>
              <h4 className="ps-4 text-color">{item.title}</h4>
              {item.options.map((option, index) => (
                <ul className="style-none mt-4">
                  <li className="text-start f-size  fw-lighter">{`>${option}`}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
        <div className="ms-5 mt-5 ">
          <h4 className=" text-color">Contact</h4>
          <div>
            {contact.map((item) => (
              <div className="d-flex align-items-center gap-2 mt-4">
                <img height={20} className="" src={item.src} alt="contact" />
                <span className="text-center">{item.mode}</span>
              </div>
            ))}
          </div>
          import React from 'react';
          <div>
            <iframe
              className="mt-3"
              title="mapping"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510271751!2d76.76357017426172!3d28.644287354223533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1694055009994!5m2!1sen!2sin"
              width="400"
              height="200"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="position-absolute bottom-0 ms-4 d-flex align-items-center gap-3 w-25">
          <img height={100} src="/asessts/specialOffer.png" alt="offer" />
          <h6>
            Get 50$ OFF on your First Visit when you Book through our App.
          </h6>
        </div>
      </div>
      <div className="d-flex align-items-center ms-4 mt-2 mb-4">
        <span className="fw-bolder text-color">DOWNLOAD OUR APP : </span>
        <div className="w-25">
          <img
            className="w-25 img-fluid"
            src="/asessts/footer/download (1).png"
            alt="download"
          />
          <img
            className="w-25 img-fluid"
            src="/asessts/footer/download (1).png"
            alt="download"
          />
        </div>
      </div>
      <span className="text-color position-absolute bottom-0 start-50 translate-middle">
        ©️All Rights Reserved 2023
      </span>
    </section>
  );
};

export default Footer;
