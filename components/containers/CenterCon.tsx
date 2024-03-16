import React from "react";

type Props = {
  children: React.ReactNode;
  w: "lg:w-[60vw]" | "lg:w-[70vw]" | "lg:w-[80vw]";
  cls?: string;
};

const CenterCon = (props: Props) => {
  return (
    <div className="w-full center mb-10">
      <div
        className={`w-[95%] ${props.w} vstack ${props.cls} whitespace-pre-line`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default CenterCon;
