const Selection = () => {
  return (
    <section className="px-[5vw] pt-48 text-center md:px-[10vw]">
      <h2 className="font-noto-sans-tamil font-bold capitalize text-secondary sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        <span className="-me-[2px] border border-secondary pb-0.5 pe-0.5 ps-1 pt-1 sm:border-2">
          discover our coffee
        </span>{" "}
        selection
      </h2>

      <p className="mt-4 font-manjari text-[9px] font-bold text-secondary sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
        Immerse yourself in our handcrafted coffee menu, featuring a variety of
        bold espressos, creamy lattes, and refreshing iced coffees, each
        expertly prepared to elevate your coffee experience.
      </p>
      <button className="mt-4 rounded bg-primary px-4 pb-0.5 pt-1 font-noto-sans-tamil text-sm font-bold text-white transition-transform duration-300 hover:scale-105">
        More Details
      </button>
    </section>
  );
};

export default Selection;
