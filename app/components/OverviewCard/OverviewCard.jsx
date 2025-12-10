import React from "react";

import PropsTypes from "prop-types";
const OverviewCard = ({ border, bgColor, iconBg, Icon, text, amount }) => {
  return (
    <div
      className={`w-full px-6 py-6 rounded-[12px]  border-b-4 ${border} ${bgColor}`}
    >
      <div className="flex justify-between items-start w-full ">
        <div className="flex flex-col gap-y-4 text-gray-800">
          <span className="text-xl  capitalize">{text}</span>
          <span className="text-4xl font-bold">{amount}</span>
        </div>
        <div
          className={` min-w-7 min-h-7 flex justify-center items-center rounded-full ${iconBg}`}
        >
          <Icon size={12} className="text-white" />
        </div>
      </div>
    </div>
  );
};

OverviewCard.propTypes = {
  border: PropsTypes.string,
  bgColor: PropsTypes.string,
  iconBg: PropsTypes.string,
  amount: PropsTypes.number,
};
OverviewCard.defaultProps = {
  border: "border-[#28629C]",
  bgColor: "bg-linear-to-br from-[#F4F9FE] to-[#B0D2F9]",
  iconBg: "bg-[#28629C]",
};
export default OverviewCard;
