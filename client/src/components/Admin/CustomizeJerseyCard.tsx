/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function CustomizeJerseyCard({ custom }) {
  const { image } = custom;
  return (
    <div className=" w-full lg:w-96">
      <div className="flex justify-end gap-3 mb-2">
        <button className="btn border-none bg-red-500 text-white text-2xl">
          Delete
        </button>
      </div>
      <div>
        <img className="rounded-md " src={image} alt="" />
      </div>
    </div>
  );
}
