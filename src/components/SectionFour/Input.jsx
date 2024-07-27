import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="bg-transparent border border-primary font-manjari font-bold uppercase lg:text-xl pt-2 xl:pt-4 pb-1 xl:pb-2 px-5 xl:px-7 w-full md:w-[49%] mb-5 tracking-wide"
    />
  );
};

export default Input;
