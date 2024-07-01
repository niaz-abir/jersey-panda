import GalleryCard from "@/components/Admin/GalleryCard";
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
    <section className="bg-black pb-14 pt-8">
      <h1 className="font-bold pb-6 pt-4 text-2xl pl-8">Moment With people</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-6 mr-6">
        {allGallery?.map((gallery) => (
          <GalleryCard key={gallery?.id} gallery={gallery} />
        ))}
      </div>
    </section>
  );
};

export default AllGallery;
