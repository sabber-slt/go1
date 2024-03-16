import Link from "next/link";
import React from "react";

type Props = {
  tag1: string;
};

const BlogRoadmap = (props: Props) => {
  return (
    <div
      style={{ direction: "ltr" }}
      className="w-full lg:w-[50vw] flex flex-row items-center justify-start space-x-2 font-semibold text-[13px] lg:text-[15px]"
    >
      <Link href="/" className="">
        Home
      </Link>
      <p>{">"}</p>
      <Link href="/" className="">
        Blogs
      </Link>
      <p>{">"}</p>
      <p className="text-main text-[14px]">{props.tag1}</p>
    </div>
  );
};

export default BlogRoadmap;
