import React from "react";
import JerseyCard from "./card/jerseyCard";
import { VscJersey } from "react-icons/vsc";
import { IoShirtSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Jersey() {
  const allJersey = [
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
    {
      id: 1,
      name: "Real madrid",
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
      originalPrice: "650",
      price: "400",
      size: ["M", "L", "XL", "2XL"],
    },
  ];
  return (
    <section className="bg-black">
      <div className="flex justify-center items-center p-4 my-6 mt-16 mb-20">
        <div className="relative p-3 border border-[#1c1c22] rounded-lg w-full max-w-lg">
          <input
            type="text"
            className="rounded-md p-3 w-full bg-[#1c1c22] focus:outline-none"
            placeholder="Search your jersey"
          />

          <button type="submit" className="absolute right-6 top-6">
            <IoMdSearch className="text-2xl" />
          </button>
        </div>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 flex items-center gap-2 h-14 text-[20px] bg-[#1c1c22] text-white border-none hover:bg-[#1c1c22]"
          >
            All Jersey <RiArrowDropDownLine className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52"
          >
            <li>
              <a className="text-[18px]  hover:bg-[#1c1c22]">Club</a>
            </li>
            <li>
              <a className="text-[18px]  hover:bg-[#1c1c22]">National</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center lg:grid-cols-3 gap-4 ml-0 p-4 lg:ml-6">
        {allJersey?.slice(0, 20).map((jersey) => (
          <JerseyCard key={jersey?.id} jersey={jersey} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="flex gap-2 items-center rounded-md btn bg-[#50278b] text-[20px]  border-[#50278b] hover:bg-transparent hover:border-2 hover:border-[#50278b] text-white font-bold">
          All Jersey
          <IoShirtSharp />
        </button>
      </div>
    </section>
  );
}
