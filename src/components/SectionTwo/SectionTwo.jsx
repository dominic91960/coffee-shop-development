import { useEffect } from "react";
import AOS from "aos";

import imageOne from "../../assets/images/SectionTwo/image-one.png";
import imageTwo from "../../assets/images/SectionTwo/image-two.png";
import imageThree from "../../assets/images/SectionTwo/image-three.png";
import "aos/dist/aos.css";
import "./SectionTwo.css";

const SectionTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="section-two-background bg-[#271300] bg-cover text-white">
      <div className="px-[10vw] pb-20 pt-10 md:px-[5vw]">
        <section id="locations" className="scroll-mt-[35px] pt-20">
          <h2 className="mb-16 font-noto-sans-tamil text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Exp
            <span className="border border-primary py-1">
              erience Our Offering
            </span>
            s
          </h2>
          <div className="flex flex-col md:mb-10 lg:mb-16 lg:flex-row lg:gap-x-9">
            <div className="max-w-[500px] lg:w-2/5 lg:max-w-none xl:w-[45%]">
              <img
                src={imageOne}
                alt="Barista image one"
                className="mb-6 sm:hidden"
              />
              <img
                src={imageOne}
                alt="Barista image one"
                className="mb-6 hidden sm:block"
                data-aos="slide-from-left"
              />
              <p className="mb-10 text-left font-manjari text-xs font-medium sm:text-sm md:text-base">
                Immerse yourself in our curated selection of beverages and
                treats, expertly prepared by our dedicated team. Whether you're
                seeking a robust espresso or a comforting latte, our commitment
                to quality and customer satisfaction ensures a memorable coffee
                shop experience.
              </p>
            </div>
            <div className="max-w-[500px] self-end lg:mt-3 lg:flex lg:w-3/5 lg:max-w-none lg:flex-col-reverse lg:self-start xl:w-[55%]">
              <div className="flex gap-4">
                <div className="mb-6 lg:mb-0 lg:flex-grow">
                  <img
                    src={imageTwo}
                    alt="Barista image two"
                    className="sm:hidden"
                  />
                  <img
                    src={imageTwo}
                    alt="Barista image two"
                    className="hidden sm:block"
                    data-aos="slide-from-right"
                  />
                </div>
                <div className="hidden lg:block lg:flex-shrink">
                  <img
                    src={imageThree}
                    alt="Barista image three"
                    data-aos="slide-from-right-two"
                  />
                </div>
              </div>
              <p className="mb-10 text-left font-manjari text-xs font-medium sm:text-sm md:text-base lg:mb-6">
                Delight in the comprehensive services at EspressoZen Cafe, where
                we specialize in crafting artisanal coffees, decadent pastries,
                and providing a welcoming ambiance that invites you to unwind
                and savor every moment.
              </p>
            </div>
          </div>
        </section>
        <div className="relative z-10 w-fit pe-5 ps-2 md:pe-10 xl:pe-16">
          <div className="absolute left-0 top-0 -z-10 h-1/2 w-full border border-primary"></div>
          <h1 className="text-left font-noto-sans-tamil text-xl font-extrabold leading-relaxed sm:text-2xl md:text-3xl md:leading-relaxed lg:text-4xl lg:leading-relaxed xl:text-5xl xl:leading-relaxed">
            Introducing <br />
            Our Specialty <br />
            Brew
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
