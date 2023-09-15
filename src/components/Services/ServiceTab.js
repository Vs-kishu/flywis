import React from "react";
import Services from "../home/Services";

const ServiceTab = () => {
  return (
    <section>
      <div className=" relative max-w-screen">
        <img
          className="w-full h-[26rem] object-cover"
          src="https://s3-alpha-sig.figma.com/img/efd9/806b/22695128354bc21a01db7664dde7431c?Expires=1695600000&Signature=qeDPlcMMtQ0gmydwoHsfbwudAtYnOiBQ2RvJJ2rqygP9SVziIA6yWxKVmkL19KldVRzunAOtcHKuW2XKvFjroaRGnG-uFTCD2cM8mcNXjBBUKZ8wv0L68COJqNm1YFNtkDNymjn9PEowTS2t59SIJCRQfDNO0RcM4B7txIVgK5NXDH67cOoiNWwQDdSMqu8HkrpEykNfAPUO1uwUrxNbof6HLyrLx7KvT2E6rkH~dMCWe1WDc-huVMKidYjM5QVkxkT7eoPtD2imKS6-H2huXeqkgJqyocTyNV4TkvmyW91rIzNmWkZNL8aigdYJopYsJ0decXRUtmUdfUR26HAx1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="service cover"
        />
        <div className="absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-25  justify-around">
          <h1 className="text-6xl text-white text-center  z-50 font-light">
            Services
          </h1>
          <button className="w-52 mx-auto py-2 text-lg font-semibold z-50  bg-secondary text-primary">
            BOOK ONLINE
          </button>
        </div>
        <div className="absolute top-24 left-12">
          <img src="/asessts/back-button.svg" alt="back-button" />
        </div>
      </div>
      <Services />
    </section>
  );
};

export default ServiceTab;
