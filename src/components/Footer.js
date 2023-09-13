import React from "react";
import {
  MAP_URL,
  contact,
  footerLinks,
  paymentCards,
} from "../constants/constant";

const Footer = () => {
  return (
    <section className="bg-primary text-white py-5 px-8 relative">
      <div className="flex justify-between px-8">
        <div className="flex flex-col gap-1 items-center justify-center">
          <span className="text-lg font-medium">FOLLOW US</span>
          <div className="flex items-center justify-center gap-2">
            <img
              src="/asessts/footer/instagram.png"
              className="w-16 h-16"
              alt="instagram"
            />
            <img
              src="/asessts/footer/facebook.png"
              className="w-16 h-16"
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
        <div className="flex flex-col gap-1 justify-center">
          <span className="text-lg font-medium">WE ACCEPT</span>
          <div className="flex gap-2">
            {paymentCards.map((src, index) => (
              <div key={index}>
                <img src={src} alt="card" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-5 px-5 relative">
        <div className="flex justify-between mt-5 w-3/5">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h4 className=" text-secondary text-lg font-medium">
                {item.title}
              </h4>
              {item.options.map((option, index) => (
                <ul className="list-none mt-4">
                  <li className="text-left text-sm  font-medium">{`>${option}`}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
        <div className="ms-5 mt-5">
          <h4 className=" text-secondary text-lg font-medium">Contact</h4>
          <div>
            {contact.map((item) => (
              <div className="flex items-center gap-2 mt-4">
                <div className="w-6 h-6">
                  <img className="" src={item.src} alt="contact" />
                </div>
                <span>{item.mode}</span>
              </div>
            ))}
          </div>
          <div>
            <iframe
              className="mt-3"
              title="mapping"
              src={MAP_URL}
              width="400"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="absolute bottom-0  flex items-center gap-3 w-1/4">
          <div>
            <img height={100} src="/asessts/specialOffer.png" alt="offer" />
          </div>
          <h6>
            Get 50$ OFF on your First Visit when you Book through our App.
          </h6>
        </div>
      </div>
      <div className="flex items-center mt-4 mb-4">
        <span className="font-medium text-color mr-5">DOWNLOAD OUR APP : </span>
        <div className="w-1/4 flex gap-5">
          <img
            className="w-1/4 img-fluid"
            src="/asessts/footer/download (1).png"
            alt="download"
          />
          <img
            className="w-1/4 img-fluid"
            src="/asessts/footer/download (1).png"
            alt="download"
          />
        </div>
      </div>
      <span className=" absolute bottom-0 left-1/2 text-secondary transform -translate-x-1/2">
        ©️All Rights Reserved 2023
      </span>
    </section>
  );
};

export default Footer;
