import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";

type Props = {
  href: string;
  src: string;
  title: string;
};

const ProjectCard = (props: Props) => {
  return (
    <Link
      href={props.href}
      className="w-full h-[270px] vstack justify-between bg-zinc-900 rounded-md overflow-hidden hov"
    >
      <div className="relative w-full h-48">
        <Image
          src={props.src}
          alt=""
          fill
          priority
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="w-full h-16 flex flex-col items-center justify-center p-2 px-3">
        <h3 className="font-semibold text-[15px] lg:text-[15px] text-center">
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
