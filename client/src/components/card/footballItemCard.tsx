import React from "react";

export default function FootballItemCard({ item }) {
  const { image } = item;
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
