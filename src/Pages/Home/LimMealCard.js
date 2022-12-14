import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const LimMealCard = ({ limMeal }) => {
  const { _id, name, price, quantity, rating, image, description } = limMeal;
  return (
    <div className="card w-96 mx-auto shadow-xl mb-5">
      <figure>
        {/* <img src={image} alt="food!" /> */}
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              src={image}
              alt=""
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold">{name}</h2>

        <div className="flex">
          <p className="text-left font-semibold">price: {price} tk</p>
          <p className="text-left font-semibold">quantity: {quantity}</p>
          <p className="text-left font-semibold">ratings: {rating}</p>
        </div>

        <p className="text-left">{description.slice(0, 100) + "..."}</p>
        <div className="card-actions ">
          <Link
            to={`/allMeals/${_id}`}
            className="btn font-semibold bg-orange-500 hover:bg-orange-700 normal-case w-full border-none"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LimMealCard;
