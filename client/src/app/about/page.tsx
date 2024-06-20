import AboutCard from "@/components/card/aboutCard";
import React from "react";
import { GoGoal } from "react-icons/go";

const About = () => {
  const allAbout = [
    {
      id: 1,
      name: "Niaz Abir",
      position: "Co-founder",
      image:
        "https://i.ibb.co/yBkL4xT/Whats-App-Image-2024-06-20-at-16-06-57-15f22c50.jpg",
    },
    {
      id: 1,
      name: "Niaz Abir",
      position: "Co-founder",
      image:
        "https://i.ibb.co/yBkL4xT/Whats-App-Image-2024-06-20-at-16-06-57-15f22c50.jpg",
    },
    {
      id: 1,
      name: "Niaz Abir",
      position: "Co-founder",
      image:
        "https://i.ibb.co/yBkL4xT/Whats-App-Image-2024-06-20-at-16-06-57-15f22c50.jpg",
    },
    {
      id: 1,
      name: "Niaz Abir",
      position: "Co-founder",
      image:
        "https://i.ibb.co/yBkL4xT/Whats-App-Image-2024-06-20-at-16-06-57-15f22c50.jpg",
    },
  ];
  return (
    <section className="bg-black text-white mt-8 pb-14">
      <h1 className="font-bold pb-8 text-[20px] lg:text-2xl pl-8">
        Meet With Our Member{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ml-2 lg:ml-6">
        {allAbout?.map((about) => (
          <AboutCard about={about} key={about?.id} />
        ))}
      </div>
      <div className="mb-8 mt-20 max-w-4xl lg:max-w-7xl mx-auto flex flex-col items-center gap-24 lg:flex-row">
        <div className="rounded-md border-x-2 border-purple-800  p-4">
          <div className="flex  pb-4">
            <h3 className="flex items-center gap-4 text-[22px] font-bold text-purple-800 ">
              <GoGoal />
              What We Do
            </h3>
          </div>
          <p className="pb-4 text-justify">
            Every great venture begins with a spark of inspiration, a moment
            when a vision is born out of a desire to make a difference. Our
            story is no different. It started with a simple yet powerful idea:
            to create a space where passion meets purpose, where innovation
            thrives, and where people are empowered to reach their fullest
            potential.
          </p>
        </div>
        <div className="rounded-md border-x-2 border-purple-800  p-4">
          <div className="flex  pb-4">
            <h3 className="flex items-center gap-4 text-[22px] font-bold text-purple-800">
              <GoGoal />
              What Our Goal
            </h3>
          </div>
          <p className="pb-4 text-justify">
            Every great venture begins with a spark of inspiration, a moment
            when a vision is born out of a desire to make a difference. Our
            story is no different. It started with a simple yet powerful idea:
            to create a space where passion meets purpose, where innovation
            thrives, and where people are empowered to reach their fullest
            potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
