import React from "react";
import { about, paymentCards } from "../constants/constant";

const Footer = () => {
  return (
    <section style={{ height: "100vh" }} className="bg-color text-white">
      <div className="d-flex justify-content-between px-5 py-2">
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
      <div className="d-flex  justify-content-between w-50 mt-5 ms-4">
        {about.map((item, index) => (
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
    </section>
  );
};

export default Footer;
