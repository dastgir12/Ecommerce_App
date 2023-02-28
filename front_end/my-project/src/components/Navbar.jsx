import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
const Navbar = ({ user, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  if (!user) return null;
  return (
    <div className=" flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className=" flex justify-start items-center w-full px-2  rounded-md border-none outline-none focus-within:shadow-small  bg-white">
        <IoMdSearch fontSize={21} className={" ml-1"} />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          onFocus={() => navigate("/search")}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className='md:block hidden'>
        <img src={user.image} alt="user" className="w-14 h-12 rounded-lg"  />
        </Link>

        <Link to='create-pin' className='bg-black flex justify-center items-center text-white w-12 h-12 md:h-12 md:w-14 rounded-lg '>
        <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
