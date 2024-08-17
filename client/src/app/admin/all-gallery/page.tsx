import GalleryCard from "@/components/Admin/GalleryCard";
import Link from "next/link";
import React from "react";

const AllGallery = () => {
  const allGallery = [
    {
      id: 1,
      image:
        "https://i.ibb.co/tpGxqj9/Whats-App-Image-2024-06-20-at-16-43-25-0572c418.jpg",
      secondImage:
        "https://i.ibb.co/rvHwsNw/438239251-122137657796238666-1210703661665680414-n.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/tpGxqj9/Whats-App-Image-2024-06-20-at-16-43-25-0572c418.jpg",
      secondImage:
        "https://i.ibb.co/rvHwsNw/438239251-122137657796238666-1210703661665680414-n.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/tpGxqj9/Whats-App-Image-2024-06-20-at-16-43-25-0572c418.jpg",
      secondImage:
        "https://i.ibb.co/rvHwsNw/438239251-122137657796238666-1210703661665680414-n.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/tpGxqj9/Whats-App-Image-2024-06-20-at-16-43-25-0572c418.jpg",
      secondImage:
        "https://i.ibb.co/rvHwsNw/438239251-122137657796238666-1210703661665680414-n.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/tpGxqj9/Whats-App-Image-2024-06-20-at-16-43-25-0572c418.jpg",
      secondImage:
        "https://i.ibb.co/rvHwsNw/438239251-122137657796238666-1210703661665680414-n.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/tpGxqj9/Whats-App-Image-2024-06-20-at-16-43-25-0572c418.jpg",
      secondImage:
        "https://i.ibb.co/rvHwsNw/438239251-122137657796238666-1210703661665680414-n.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/tpGxqj9/Whats-App-Image-2024-06-20-at-16-43-25-0572c418.jpg",
      secondImage:
        "https://i.ibb.co/rvHwsNw/438239251-122137657796238666-1210703661665680414-n.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/tpGxqj9/Whats-App-Image-2024-06-20-at-16-43-25-0572c418.jpg",
      secondImage:
        "https://i.ibb.co/rvHwsNw/438239251-122137657796238666-1210703661665680414-n.jpg",
    },
    {
      id: 1,
      image:
        "https://i.ibb.co/tpGxqj9/Whats-App-Image-2024-06-20-at-16-43-25-0572c418.jpg",
      secondImage:
        "https://i.ibb.co/rvHwsNw/438239251-122137657796238666-1210703661665680414-n.jpg",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto h-auto pb-14 pt-8">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-2xl pb-4 pt-8 pl-10">
            Moment With people
          </h1>
        </div>
        <div>
          <Link href="/admin/add-gallery">
            <button className="btn mr-8 bg-green-500 text-black  text-2xl border-none font-bold">
              Add Gallery
            </button>
          </Link>
        </div>
      </div>
      <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-4 ">
        {allGallery?.map((gallery) => (
          <GalleryCard key={gallery?.id} gallery={gallery} />
        ))}
      </div>
    </section>
  );
};

export default AllGallery;
