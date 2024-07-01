import React from "react";

export type TGallery = {
  image: string;
  secondImage: string;
};

export default function GalleryCard({ gallery }: { gallery: TGallery }) {
  const { image, secondImage } = gallery;
  return (
    <div>
      <div className="flex justify-end gap-3 mb-2">
        <button className="btn border-none bg-green-500">Edit</button>
        <button className="btn border-none bg-red-500">Delete</button>
      </div>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          {" "}
          <img alt="daisy" src={secondImage} />
        </div>
        <div className="diff-item-2">
          <img alt="daisy" src={image} />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
}
