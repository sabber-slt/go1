import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
};

const Header1 = (props: Props) => {
  return (
    <div className="relative w-full lg:w-[900px] h-60 lg:h-[500px] rounded-md overflow-hidden mt-5">
      <Image
        src={props.src}
        alt={props.alt}
        fill
        sizes="100%"
        priority
        className="object-cover"
      />
    </div>
  );
};

export default Header1;
