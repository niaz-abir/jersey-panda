import React from "react";

import { VscJersey } from "react-icons/vsc";
import { IoShirtSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import JerseyCard from "@/components/Admin/jerseyCard";

export default function Jersey() {
  const allJersey = [
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/SKF2QQy/Whats-App-Image-2024-08-13-at-23-13-46-9ebc77d5-removebg-preview.png",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-2xl pb-4 pt-8 pl-10">All jersey</h1>
        </div>
        <div>
          <Link href="/admin/add-jersey">
            <button className="btn mr-8 bg-green-500 text-black  text-2xl border-none font-bold">
              Add Jersey
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center lg:grid-cols-3 gap-4 ml-0 p-4 lg:ml-6">
        {allJersey?.slice(0, 20).map((jersey) => (
          <JerseyCard key={jersey?.id} jersey={jersey} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="jersey">
          <button className="flex gap-2 items-center rounded-md btn bg-[#50278b] text-[20px]  border-[#50278b] hover:bg-transparent hover:border-2 hover:border-[#50278b] text-white font-bold">
            All Jersey
            <IoShirtSharp />
          </button>
        </Link>
      </div>
    </section>
  );
}
