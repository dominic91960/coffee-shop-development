const BtnToggle = ({ isToggled, handleClick }) => {
  return (
    <button
      className={`${
        isToggled ? "toggle-animation" : ""
      } relative h-8 w-8 md:hidden drop-shadow-[1px_1px_2px_rgb(0,0,0)]`}
      onClick={handleClick}
    >
      <div className="absolute -mt-[1px] h-0.5 w-full rounded bg-white transition-all duration-1000 ease-in-out before:absolute before:left-0 before:h-0.5 before:w-full before:-translate-y-2 before:rounded before:bg-white before:transition-transform before:duration-1000 before:ease-in-out after:absolute after:left-0 after:h-0.5 after:w-full after:translate-y-2 after:rounded after:bg-white after:transition-transform after:duration-1000 after:ease-in-out"></div>
    </button>
  );
};

export default BtnToggle;
