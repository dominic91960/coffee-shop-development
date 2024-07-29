import twitterIcon from "../../assets/images/Footer/twitter-icon.png";
import facebookIcon from "../../assets/images/Footer/facebook-icon.png";
import instagramIcon from "../../assets/images/Footer/instagram-icon.png";
import githubIcon from "../../assets/images/Footer/github-icon.png";
import "./Footer.css";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-secondary px-20 py-32 relative">
      <div className="font-inter text-white text-left flex flex-col lg:flex-row gap-10 lg:gap-6 xl:gap-10 justify-between xl:w-4/5 xl:mx-auto">
        <div className="flex flex-col gap-y-8 lg:w-1/3">
          <h4 className="font-bold text-xl">Logo</h4>
          <p className="text-[#A1A1AA]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="flex gap-2">
            <a href="">
              <img
                src={twitterIcon}
                alt="Twitter icon"
                className="w-8 h-8 hover:scale-125 transition-transform duration-300"
              />
            </a>
            <a href="">
              <img
                src={facebookIcon}
                alt="Github icon"
                className="w-8 h-8 hover:scale-125 transition-transform duration-300"
              />
            </a>
            <a href="">
              <img
                src={instagramIcon}
                alt="Github icon"
                className="w-8 h-8 hover:scale-125 transition-transform duration-300"
              />
            </a>
            <a href="">
              <img
                src={githubIcon}
                alt="Github icon"
                className="w-8 h-8 hover:scale-125 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
        <div className="text-xs flex justify-between lg:justify-around capitalize flex-grow">
          <div>
            <p className="text-[#A1A1AA] uppercase tracking-widest mb-8">
              company
            </p>
            <ul className="flex flex-col gap-4">
              <li className="hover:scale-125 transition-transform duration-300">
                <a href="">about</a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300">
                <a href="">features</a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300">
                <a href="">works</a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300">
                <a href="">careers</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[#A1A1AA] uppercase tracking-widest mb-8">
              help
            </p>
            <ul className="flex flex-col gap-4">
              <li className="hover:scale-125 transition-transform duration-300">
                <a href="">customer support</a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300">
                <a href="">delivery details</a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300">
                <a href="">terms & conditions</a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300">
                <a href="">privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-xs flex flex-col items-start z-10">
          <p className="text-[#A1A1AA] uppercase tracking-widest mb-8">
            subscribe to our newsletter
          </p>
          <input
            type="email"
            placeholder="enter your email"
            className="p-3 rounded-md mb-4 w-[30ch] md:w-[35ch] text-black"
          />
          <button className="p-3 px-5 bg-black rounded-md mb-4 hover:scale-105 transition-transform duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <div className="pt-5 lg:pt-10">
        <hr className="opacity-30" />
        <p className="font-inter text-white text-xs pt-5">
          &#169; Copyright {date.getFullYear()}, All Rights Reserved by Logo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
