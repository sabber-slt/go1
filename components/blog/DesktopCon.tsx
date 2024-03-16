import Link from "next/link";
import React from "react";
import Social from "../Social";
import ImageDesktop from "./ImageDesktop";

type Props = {};

const DesktopCon = (props: Props) => {
  return (
    <div className="hidden lg:flex w-[40vw] flex-col items-center justify-start mt-14 bg-zinc-100 bg-gradient-to-t from-white to-transparent">
      <div className="vstack mt-20">
        <ImageDesktop
          href="https://raybod.io"
          src="/pics/raybod.png"
          title="درباره رایبد بیشتر بدانید"
        />
        <ImageDesktop
          href="https://sabber.dev/about"
          src="/pics/sabber.png"
          title="درباره من"
        />
      </div>
      <Social />
    </div>
  );
};

export default DesktopCon;
