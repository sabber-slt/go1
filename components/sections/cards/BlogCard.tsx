import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  src: string;
  title: string;
  time: string;
  persian_date: string;
  tag: string;
};

const BlogCard = (props: Props) => {
  return (
    <Link
      href={props.href}
      className="relative w-full lg:w-full h-48 lg:h-72 vstack justify-end rounded-md overflow-hidden shadow-lg hov"
    >
      <Image
        src={props.src}
        alt=""
        fill
        priority
        sizes="100%"
        className="object-cover opacity-60"
      />

      <div className="w-full h-24 lg:h-32 pt-7 lg:pt-10 flex flex-col items-center justify-between bg-gradient-to-t from-main to-transparent p-2 z-30">
        <h3 className="font-semibold text-[19px] lg:text-[22px] text-center text-white">
          {props.title}
        </h3>
        <div className="absolute bottom-2 left-2 hstack justify-center">
          <p className="text-[14px] lg:text-[16px] mr-1 mt-1">#</p>
          <p className="text-[12px] lg:text-[16px] font-semibold">
            {props.tag[0]}
          </p>
          {props.tag[1] && (
            <p className="text-[12px] lg:text-[16px] font-semibold mx-1">
              , {props.tag[1]}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
