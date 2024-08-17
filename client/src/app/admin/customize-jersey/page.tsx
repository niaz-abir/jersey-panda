import CustomizeJerseyCard from "@/components/Admin/CustomizeJerseyCard";
import Link from "next/link";
import React from "react";

const CustomizeJersey = () => {
  const AllCustom = [
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto pb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-bold text-2xl pb-8 pt-8 pl-10">
            All Custom Jersey:
          </h1>
        </div>
        <div>
          <Link href="/admin/add-customize-jersey">
            <button className="btn mr-8 bg-green-500 text-black  text-2xl border-none font-bold">
              Add Custom Jersey
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-8 mr-8">
        {AllCustom?.map((custom) => (
          <CustomizeJerseyCard key={custom?.id} custom={custom} />
        ))}
      </div>
    </section>
  );
};

export default CustomizeJersey;
