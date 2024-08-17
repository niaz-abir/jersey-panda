import FootballItemCard from "@/components/Admin/footballItemCard";
import Link from "next/link";
import React from "react";

const FootballItem = () => {
  const allFootballItem = [
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
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between max-w-6xl mx-auto items-center">
        <div>
          <h1 className="font-bold text-2xl pb-8 pt-8 pl-10">
            All Football Item:
          </h1>
        </div>
        <div>
          <Link href="/admin/add-football-item">
            <button className="btn mr-8 bg-green-500 text-2xl text-white border-none font-bold">
              Add football Item
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 max-w-6xl mx-auto mt-14">
        {allFootballItem?.map((footballItem) => (
          <FootballItemCard
            footballItem={footballItem}
            key={footballItem?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FootballItem;
