import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  title: string;
  src: string;
};

const ImageDesktop = (props: Props) => {
  return (
    <Link href={props.href} className="w-72 h-52 bg-white shadow-md hov mt-7">
      <div className="relative w-full h-40">
        <Image
          src={props.src}
          alt={props.title}
          fill
          priority
          sizes="50%"
          className="object-cover"
        />
      </div>

      <p className="font-semibold text-center mt-3">{props.title}</p>
    </Link>
  );
};

export default ImageDesktop;
