import React from "react";
import { FaBars } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="text-[#8057be]" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            <li>
              <a className="text-[18px] font-semibold hover:bg-[#8057be] border-2 border-[#8057be] rounded-sm text-white w-32 duration-300">
                About Us
              </a>
            </li>
            <li>
              <a className="text-[18px] font-semibold hover:bg-[#8057be] mt-2  border-2 border-[#8057be] rounded-sm text-white w-32 duration-300">
                jersey
              </a>
            </li>
            <li>
              <a className="text-[18px] font-semibold hover:bg-[#8057be] mt-2   border-2 border-[#8057be] rounded-sm text-white w-40 duration-300">
                Custom jersey
              </a>
            </li>
            <li>
              <a className="text-[18px] font-semibold hover:bg-[#8057be] mt-2  border-2 border-[#8057be] rounded-sm text-white w-32 duration-300">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl bg-[#1c1c22] font-bold text-[#8057be] flex gap-4 items-center">
          Jersey Panda <SiFoodpanda className=" text-[#8057be]" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2 px-1">
          <li>
            <a className="text-[18px] font-semibold hover:bg-[#8057be] border-l-2 border-[#8057be] rounded-sm text-white w-32 duration-300">
              About Us
            </a>
          </li>
          <li>
            <a className="text-[18px] font-semibold hover:bg-[#8057be]  border-l-2 border-[#8057be] rounded-sm text-white w-32 duration-300">
              jersey
            </a>
          </li>
          <li>
            <a className="text-[18px] font-semibold hover:bg-[#8057be]    border-l-2 border-[#8057be] rounded-sm text-white w-40 duration-300">
              Custom jersey
            </a>
          </li>
          <li>
            <a className="text-[18px] font-semibold hover:bg-[#8057be]   border-l-2 border-[#8057be] rounded-sm text-white w-32 duration-300">
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
