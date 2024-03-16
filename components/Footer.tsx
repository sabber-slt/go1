import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="w-full center font-[600] text-zinc-500">
      <div className="w-full lg:w-[70%] vstack py-5 lg:py-20 justify-center z-40">
        <div className="w-full flex flex-col lg:flex-row items-center justify-around">
          <div className="w-full lg:w-1/3 vstack mr-0 lg:mr-16">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="mb-3"
            />
            <Social />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-around px-4 lg:px-0">
            <div className="w-full h-full mt-4 lg:w-2/3 flex flex-col lg:items-center justify-center text-center">
              <h3 className="font-bold text-main lg:text-lg">Pages</h3>
              <div className="grid grid-cols-3 items-center text-zinc-300">
                <Link href="/" className="mt-2 px-4 text-[13px] lg:text-sm">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="mt-2 px-4 text-[13px] lg:text-sm"
                >
                  About Me
                </Link>
                <Link
                  href="https://github.com/sabber-slt"
                  className="mt-2 px-4 text-[13px] lg:text-sm"
                >
                  Github
                </Link>
                {/* <Link
                  href="/blogs"
                  className="mt-2 px-4 text-[13px] lg:text-sm"
                >
                  Blogs
                </Link> */}
                <Link
                  href="https://raybod.io/services/software-development"
                  className="mt-2 px-4 text-[13px] lg:text-sm"
                >
                  Development
                </Link>
                <Link
                  href="https://raybod.io"
                  className="mt-2 px-4 text-[13px] lg:text-sm"
                >
                  Raybod
                </Link>
                <Link
                  href="https://raybod.io/contact"
                  className="mt-2 px-4 text-[13px] lg:text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-full h-full mt-5 lg:w-2/3 flex flex-col lg:items-center justify-center text-center">
              <h3 className="font-bold text-main lg:text-lg">Info</h3>
              <Link
                href="/"
                className="mt-0 text-[13px] lg:text-sm text-zinc-300"
              >
                developer@sabber.dev
              </Link>
              <Link
                href="/"
                className="mt-0 text-[13px] lg:text-sm text-zinc-300"
              >
                info@raybod.io
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
