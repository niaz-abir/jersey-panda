import CustomCard from "@/components/card/customCard";
import React from "react";

const CustomJersey = () => {
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
    <section className="bg-black pb-8">
      <h1 className="font-bold text-2xl pb-8 pt-8 pl-10">All Custom Jersey:</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-8 mr-8">
        {AllCustom?.map((custom) => (
          <CustomCard key={custom?.id} custom={custom} />
        ))}
      </div>
    </section>
  );
};

export default CustomJersey;
