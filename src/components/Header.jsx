import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Link to="/" className=" uppercase text-[3vw] font-sans cursor-pointer">
          Intuitive Quiz Test
        </Link>
        <hr className="m-[10px] w-[100%] bg-slate-500" />
      </div>
    </>
  );
};

export default Header;
