import React from "react";
import ReviewCard from "./ReviewCard";

const ClientReviews = () => {
  return (
    <div className="mb-5">
      <div className="d-flex flex-column align-items-center ">
        <h1 className="btn-text">Client Reviews</h1>
        <p className="w-50 lh-base text-center mt-3 mb-3">
          We are very proud of the service we provide and stand by every product
          we carry. We work hard to address our client's needs and have them
          leave our spa loving their skin. That's why over 400 people have given
          us a 5-star rating on Google!
        </p>
        <div className="mt-4 mb-5">
          <img
            height={100}
            className="object-contain"
            src="/asessts/google-review.png"
            alt="goolw-review"
          />
        </div>
      </div>
      <div
        className=" d-flex gap-3 p-5"
        style={{ maxWidth: "100%", overflowX: "auto" }}
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default ClientReviews;
