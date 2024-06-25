import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const allDashBoardRoute = [
    {
      id: 1,
      name: "add jersey",
      href: "/admin/add-jersey",
    },
    {
      id: 1,
      name: "all jersey",
      href: "/admin/all-jersey",
    },
    {
      id: 2,
      name: "add gallery",
      href: "/admin/add-gallery",
    },
    {
      id: 3,
      name: "all gallery",
      href: "/admin/all-gallery",
    },
    {
      id: 4,
      name: "add customize jersey",
      href: "/admin/add-jersey",
    },
    {
      id: 1,
      name: "all customize jersey",
      href: "/admin/add-jersey",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto mt-14">
      <h1 className="text-4xl pb-6 fon-bold text-center">
        Welcome In Dashboard
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-52">
          {allDashBoardRoute?.map((route) => (
            <div
              key={route?.id}
              className="bg-gray-700 font-bold p-2 rounded-md"
            >
              <Link href={route?.href}>
                <h2 className="text-center">{route?.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
