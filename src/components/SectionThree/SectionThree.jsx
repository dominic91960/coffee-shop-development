import specialtyBrew from "../../assets/images/SectionThree/specialty-brew.png";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <div className="section-three-background relative">
      <div className="px-20 font-manjari font-semibold w-full flex flex-col items-center -translate-y-[38%] lg:-translate-y-[35%] pb-16">
        <div className="mb-2 sm:w-4/5 md:w-3/5 lg:w-4/5">
          <img
            src={specialtyBrew}
            alt="Specialty brew"
            className="translate-x-10 md:translate-x-0"
          />
        </div>
        <p className="text-secondary mb-6 text-sm md:text-base lg:text-lg xl:text-2xl">
          Discover our latest addition at EspressoZen Cafe: a meticulously
          crafted coffee made using a special brewing technique that enhances
          its flavor profile. Experience the depth and richness of this unique
          blend, carefully prepared by our skilled baristas to offer you a
          delightful and unforgettable coffee experience.
        </p>
        <button className="bg-secondary text-white text-sm md:text-base lg:text-lg xl:text-2xl rounded-xl px-8 pt-2 pb-1 font-medium lg:pt-3 hover:scale-105 transition-transform duration-300">
          Taste Our Specialty Brew
        </button>
      </div>
      <h2 className="font-noto-sans-tamil font-extrabold text-3xl md:text-4xl lg:text-5xl absolute bottom-[12vh] lg:bottom-[20vh] left-0 right-0 md:pb-10 lg:pb-0">
        Cr
        <span className="border border-primary py-1 pe-2">
          afting Excellence
        </span>
      </h2>
    </div>
  );
};

export default SectionThree;
