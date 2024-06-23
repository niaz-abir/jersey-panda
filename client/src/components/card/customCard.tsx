/* eslint-disable @next/next/no-img-element */
import React from "react";

const CustomCard = ({ custom }) => {
  const { image } = custom;
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default CustomCard;
