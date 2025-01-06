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
        <img src={assets.logo} className="w-36 h-10 -translate-x-5" alt="Daswork Logo" />
        
        {/* User Section */}
        {user ? (
          <div className="flex items-center gap-6">
            <Link
              to={"/application"}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded-full transition-colors"
            >
              Applied Jobs
            </Link>
            <div className="flex items-center gap-2">
              <p className="text-black/70 text-lg">
                {user.firstName + " " + user.lastName[0]}
              </p>
              <div className="px-1 py-1 rounded-full bg-green-800 flex items-center cursor-pointer">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "40px",
                        height: "40px",
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
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              Recruiter Login
            </button>
            <button
              onClick={openSignIn}
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-1.5 rounded-xl transition-colors"
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
