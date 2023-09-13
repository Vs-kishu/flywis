import React from "react";

const ReviewCard = () => {
  return (
    <div
      className="flex flex-col shadow-lg p-5"
      style={{ height: "50vh", width: "50vw" }}
    >
      <h5 className="text-lg font-semibold">Claire M.</h5>
      <p className="text-base font-normal" style={{ maxWidth: "250px" }}>
        I’m a teenager who developed stretch marks through puberty. I really
        hated the way it looked. The stretch marks appeared on my thighs, knees,
        and buttocks area. I went to see Shahina for a consultation and she
        recommended micro-needling treatment. I completed 3 sessions. I am very
        pleased with the results.
      </p>
    </div>
  );
};

export default ReviewCard;
