import React from "react";
import { FaClock } from "react-icons/fa6";
import { FaCalendarCheck, FaHashtag } from "react-icons/fa";
type Props = {
  persian_date: string;
  tag1: string;
  time: string;
};

const HeaderDetail = (props: Props) => {
  return (
    <div className="w-full lg:w-[50vw] flex flex-row items-center justify-around mt-3">
      <div className="hstack ">
        <FaCalendarCheck className="text-main" />{" "}
        <p className="text-[13px] font-semibold mr-1 pt-1">
          {props.persian_date}
        </p>
      </div>
      <div className="hstack justify-center">
        <FaHashtag className="text-main" />{" "}
        <p className="text-[13px] font-semibold mr-1 pt-1">{props.tag1}</p>
      </div>
      <div className="hstack">
        <FaClock className="text-main" />{" "}
        <p className="text-[13px] font-semibold mr-1 pt-1">{props.time}</p>
      </div>
    </div>
  );
};

export default HeaderDetail;
