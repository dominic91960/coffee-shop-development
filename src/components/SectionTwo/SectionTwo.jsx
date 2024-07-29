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
    <div className="section-two-background bg-[#271300] text-white bg-cover">
      <div className="px-20 pt-10 pb-20">
        <section id="locations" className="scroll-mt-[35px] pt-20">
          <h2 className="font-noto-sans-tamil font-extrabold text-[22px] md:text-3xl lg:text-4xl mb-16">
            Exp
            <span className="border border-primary py-1">
              erience Our Offering
            </span>
            s
          </h2>
          <div className="flex flex-col lg:flex-row lg:gap-x-9 md:mb-10 lg:mb-16">
            <div className="max-w-[500px] self-end lg:max-w-none lg:w-2/5 xl:w-[45%] lg:self-start">
              <img
                src={imageOne}
                alt="Barista image one"
                className="mb-6"
                data-aos="slide-from-left"
              />
              <p className="font-manjari font-medium text-left mb-10">
                Immerse yourself in our curated selection of beverages and
                treats, expertly prepared by our dedicated team. Whether you're
                seeking a robust espresso or a comforting latte, our commitment
                to quality and customer satisfaction ensures a memorable coffee
                shop experience.
              </p>
            </div>
            <div className="max-w-[500px] lg:max-w-none lg:w-3/5 xl:w-[55%] lg:flex lg:flex-col-reverse lg:self-start lg:mt-3">
              <div className="flex gap-4">
                <div className="lg:flex-grow mb-6 lg:mb-0">
                  <img
                    src={imageTwo}
                    alt="Barista image two"
                    data-aos="slide-from-right"
                  />
                </div>
                <div className="lg:flex-shrink hidden lg:block">
                  <img
                    src={imageThree}
                    alt="Barista image three"
                    data-aos="slide-from-right-two"
                  />
                </div>
              </div>
              <p className="font-manjari font-medium text-left mb-10 lg:mb-6">
                Delight in the comprehensive services at EspressoZen Cafe, where
                we specialize in crafting artisanal coffees, decadent pastries,
                and providing a welcoming ambiance that invites you to unwind
                and savor every moment.
              </p>
            </div>
          </div>
        </section>
        <div className="relative w-fit z-10 ps-2 pe-5 md:pe-10 xl:pe-16">
          <div className="border border-primary h-1/2 w-full  absolute top-0 left-0 -z-10"></div>
          <h1 className="font-noto-sans-tamil font-extrabold text-3xl  md:text-4xl lg:text-5xl xl:text-6xl text-left leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
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
