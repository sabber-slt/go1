/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Typewriter } from "react-simple-typewriter";
type Props = {};

const TypeWr = (props: Props) => {
  return (
    <h2 className="text-main text-[20px] lg:text-5xl mt-1 font-semibold lg:mt-2">
      <Typewriter
        words={["AI", "ML", "LLMs", "OSS"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h2>
  );
};

export default TypeWr;
