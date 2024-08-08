import specialtyBrew from "../../assets/images/SectionThree/specialty-brew.png";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <div className="section-three-background relative">
      <div className="flex w-full -translate-y-[30%] flex-col items-center px-[10vw] pb-16 font-manjari font-semibold md:px-[5vw] lg:-translate-y-[35%]">
        <div className="mb-2 sm:w-4/5 md:w-3/5 lg:w-4/5">
          <img
            src={specialtyBrew}
            alt="Specialty brew"
            className="translate-x-10 md:translate-x-0"
          />
        </div>
        <p className="mb-6 text-xs font-bold text-secondary sm:text-sm md:text-base lg:text-lg">
          Discover our latest addition at EspressoZen Cafe: a meticulously
          crafted coffee made using a special brewing technique that enhances
          its flavor profile. Experience the depth and richness of this unique
          blend, carefully prepared by our skilled baristas to offer you a
          delightful and unforgettable coffee experience.
        </p>
        <button className="rounded-xl bg-secondary px-8 pb-1 pt-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 sm:text-base md:text-lg lg:text-xl">
          Taste Our Specialty Brew
        </button>
      </div>
      <h2 className="absolute bottom-[12vh] left-0 right-0 font-noto-sans-tamil text-xl font-extrabold sm:text-2xl md:pb-10 md:text-3xl lg:bottom-[20vh] lg:pb-0 lg:text-4xl xl:text-5xl">
        Cr
        <span className="border border-primary py-1 pe-2">
          afting Excellence
        </span>
      </h2>
    </div>
  );
};

export default SectionThree;
