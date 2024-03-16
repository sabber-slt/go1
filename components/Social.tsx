import Link from "next/link";
import React from "react";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTelegram,
  FaMedium,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="w-fit grid grid-cols-5 gap-5 items-center justify-center mt-2 lg:mt-5">
      <Link
        href="https://github.com/sabber-slt"
        className="hover:scale-90 transition-all duration-300 ease-in-out"
      >
        <FaGithubSquare className="text-main w-8 h-8" />
      </Link>
      <Link
        href="https://twitter.com/sabber_dev"
        className="hover:scale-90 transition-all duration-300 ease-in-out"
      >
        <FaTwitterSquare className="text-main w-8 h-8" />
      </Link>
      <Link
        href="https://t.me/promptway"
        className="hover:scale-90 transition-all duration-300 ease-in-out"
      >
        <FaTelegram className="text-main w-8 h-8" />
      </Link>

      <Link
        href="https://www.instagram.com/sabber.dev"
        className="hover:scale-90 transition-all duration-300 ease-in-out"
      >
        <FaInstagramSquare className="text-main w-8 h-8" />
      </Link>

      <Link
        href="https://medium.com/@sabberdev"
        className="hover:scale-90 transition-all duration-300 ease-in-out"
      >
        <FaMedium className="text-main w-8 h-8" />
      </Link>
    </div>
  );
};

export default Social;
