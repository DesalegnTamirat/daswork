import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow py-3 bg-white">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={assets.logo} className="w-36 h-10 -translate-x-5 animate-smoothBounce" alt="Daswork Logo" />
        
        {/* User Section */}
        {user ? (
          <div className="flex items-center gap-6">
            <Link
              to={"/application"}
              className="bg-lime-900 hover:bg-lime-800 text-white font-bold py-1 px-5 rounded-full transition-all duration-500 max-sm:text-xs"
            >
              Applied Jobs
            </Link>
            <div className="flex items-center gap-2">
              <p className="text-black/70 text-lg max-sm:hidden">
                {user.firstName + " " + user.lastName[0]}
              </p>
              <div className="p-1 rounded-full bg-green-800 flex items-center cursor-pointer max-sm:p-0.5">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          // Guest Section
          <div className="flex gap-4 max-sm:text-xs">
            <button className="text-gray-600 hover:text-gray-800 transition-all duration-500">
              Recruiter Login
            </button>
            <button
              onClick={openSignIn}
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-1.5 rounded-xl transition-all duration-500"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
