/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoShirtSharp } from "react-icons/io5";

const JerseyCard = ({ jersey }) => {
  const { name, image, originalPrice, price, size } = jersey;

  return (
    <div>
      <div className="bg-[#1c1c22] mb-8  border-l-2 hover:rounded-lg duration-300 border-[#4c1a98] pb-4 hover:border-none  max-w-sm">
        <div className="relative h-96 w-full">
          <Image
            layout="fill"
            objectFit="cover"
            src={image}
            alt="Product Image"
          />
        </div>
        <div className="p-4">
          <h2 className=" text-[28px] flex items-center gap-2 font-bold ">
            <IoShirtSharp />
            {name}
          </h2>
          <h3 className="mb-2 font-bold">
            Price: <span className="font-semibold ">{price}</span>{" "}
            <span className=" ml-2  line-through">{originalPrice}</span>
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="mb-2 font-bold text-[18x]">Size:</h3>
            <div className="flex items-center gap-2 mb-2">
              {size.map((s, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-2 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <button className="btn bg-[#50278b] rounded-md border-[#50278b] hover:bg-transparent hover:border-2 hover:border-[#50278b] text-white font-bold">
                Take screenshot
              </button>
            </div>
            <div>
              <button className=" text-white text-2xl font-bold">
                <BiMessageSquareDetail />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JerseyCard;
