const HeroSection = () => {
  return (
    <div className="d-flex justify-content-between bg-color text-color  ">
      <div className="w-100">
        <h1 className="font-sacra text-large ps-5 pt-5">
          Shahina Hoja Aesthetics
        </h1>
        <ul
          className="px-5 ms-5 fs-5 mt-5 d-flex flex-column gap-2"
          style={{ color: "white" }}
        >
          <li>High Acne Clearing Success Rate</li>
          <li>Trained by Top Doctors in NYC</li>
          <li>Top & Latest Technology</li>
          <li>One Time Melasma Treatment</li>
          <li>High Quality Medical Grade Products</li>
        </ul>
        <button className="w-25 py-2 fw-bold ms-5 mt-5 btn-bg btn-text">
          BOOK ONLINE
        </button>
      </div>
      <div>
        <img
          className="img-fluid float-end"
          src="/asessts/hero-img.png"
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
