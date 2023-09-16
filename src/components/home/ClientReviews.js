import React from "react";
import ReviewCard from "./ReviewCard";

const ClientReviews = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-3xl text-primary mb-2">
          Client Reviews
        </h1>
        <p className="w-1/2 text-center mt-3 mb-3">
          We are very proud of the service we provide and stand by every product
          we carry. We work hard to address our client's needs and have them
          leave our spa loving their skin. That's why over 400 people have given
          us a 5-star rating on Google!
        </p>
        <div className="mt-4 mb-5">
          <img
            className="object-contain w-1/2 mx-auto"
            src="/asessts/google-review.png"
            alt="google-review"
          />
        </div>
      </div>
      <div className="grid grid-flow-col gap-3 p-5 overflow-x-scroll no-scrollbar w-full">
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
