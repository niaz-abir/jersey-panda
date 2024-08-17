/* eslint-disable @next/next/no-img-element */
import React from "react";

const FootballItemCard = ({ footballItem }) => {
  const { image } = footballItem;
  return (
    <div className=" w-full lg:w-96 p-4">
      <div className="flex justify-end gap-3 mb-2">
        <button className="btn border-none bg-red-500 text-white text-2xl">
          Delete
        </button>
      </div>
      <div>
        <img className="rounded-md  w-full lg:w-80" src={image} alt="" />
        <h1>price: 234</h1>
      </div>
    </div>
  );
};

export default FootballItemCard;
