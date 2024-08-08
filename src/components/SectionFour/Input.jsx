import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="mb-5 w-full border border-primary bg-transparent px-5 pb-1 pt-2 font-manjari text-xs font-bold uppercase tracking-wide sm:text-sm md:w-[49%] md:text-base lg:text-lg xl:px-7 xl:pb-2 xl:pt-4 xl:text-xl"
    />
  );
};

export default Input;
