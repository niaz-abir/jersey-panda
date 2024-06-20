import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { GrFacebookOption } from "react-icons/gr";

const AboutCard = ({ about }) => {
  const { image, name, id, position } = about;
  return (
    <div>
      <div className="card  w-64 lg:w-80 bg-[#1c1c22] pb-4  shadow-xl">
        <figure>
          <div className="relative h-96 w-full">
            <Image
              layout="fill"
              objectFit="cover"
              src={image}
              alt="About Image"
            />
          </div>
        </figure>
        <div className="flex justify-between">
          <div className="p-4">
            <h2 className="font-bold text-[20px]">{name}</h2>
            <h4>{position}of jersey panda</h4>
          </div>
          <div className="flex gap-2 items-center text-[20px]">
            <FaWhatsapp className="text-green-500" />{" "}
            <GrFacebookOption className="text-blue-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
