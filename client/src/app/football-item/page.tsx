import FootballItemCard from "@/components/card/footballItemCard";
import React from "react";

const FootballItem = () => {
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
      <h1 className="font-bold text-2xl pb-8 pt-8 pl-10">All Football Item:</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-8 mr-8">
        {AllCustom?.map((item) => (
          <FootballItemCard key={item?.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FootballItem;
