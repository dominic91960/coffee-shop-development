import twitterIcon from "../../assets/images/Footer/twitter-icon.png";
import facebookIcon from "../../assets/images/Footer/facebook-icon.png";
import instagramIcon from "../../assets/images/Footer/instagram-icon.png";
import githubIcon from "../../assets/images/Footer/github-icon.png";
import logo from "../../assets/images/Navbar/logo.png";
import contactIcon from "../../assets/images/Footer/contact-icon.png";
import emailIcon from "../../assets/images/Footer/email-icon.png";
import instagramIconMobile from "../../assets/images/Footer/instagram-icon-mobile.png";
import facebookIconMobile from "../../assets/images/Footer/facebook-icon-mobile.png";
import whatsappIconMobile from "../../assets/images/Footer/whatsapp-icon-mobile.png";
import envelopeIcon from "../../assets/images/Footer/envelope-icon.png";
import "./Footer.css";

const Footer = () => {
  const date = new Date();

  return (
    <>
      <footer className="relative hidden bg-secondary px-[10vw] py-32 md:px-[5vw] lg:block">
        <div className="flex flex-col justify-between gap-10 text-left font-inter text-white lg:flex-row lg:gap-6 xl:mx-auto xl:w-4/5 xl:gap-10">
          <div className="flex flex-col gap-y-8 lg:w-1/3">
            <h4 className="text-xl font-bold">Logo</h4>
            <p className="text-[#A1A1AA]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="flex gap-2">
              <a href="">
                <img
                  src={twitterIcon}
                  alt="Twitter icon"
                  className="h-8 w-8 transition-transform duration-300 hover:scale-125"
                />
              </a>
              <a href="">
                <img
                  src={facebookIcon}
                  alt="Github icon"
                  className="h-8 w-8 transition-transform duration-300 hover:scale-125"
                />
              </a>
              <a href="">
                <img
                  src={instagramIcon}
                  alt="Github icon"
                  className="h-8 w-8 transition-transform duration-300 hover:scale-125"
                />
              </a>
              <a href="">
                <img
                  src={githubIcon}
                  alt="Github icon"
                  className="h-8 w-8 transition-transform duration-300 hover:scale-125"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-grow justify-between text-xs capitalize lg:justify-around">
            <div>
              <p className="mb-8 uppercase tracking-widest text-[#A1A1AA]">
                company
              </p>
              <ul className="flex flex-col gap-4">
                <li className="transition-transform duration-300 hover:scale-125">
                  <a href="">about</a>
                </li>
                <li className="transition-transform duration-300 hover:scale-125">
                  <a href="">features</a>
                </li>
                <li className="transition-transform duration-300 hover:scale-125">
                  <a href="">works</a>
                </li>
                <li className="transition-transform duration-300 hover:scale-125">
                  <a href="">careers</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-8 uppercase tracking-widest text-[#A1A1AA]">
                help
              </p>
              <ul className="flex flex-col gap-4">
                <li className="transition-transform duration-300 hover:scale-125">
                  <a href="">customer support</a>
                </li>
                <li className="transition-transform duration-300 hover:scale-125">
                  <a href="">delivery details</a>
                </li>
                <li className="transition-transform duration-300 hover:scale-125">
                  <a href="">terms & conditions</a>
                </li>
                <li className="transition-transform duration-300 hover:scale-125">
                  <a href="">privacy policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="z-10 flex flex-col items-start text-xs">
            <p className="mb-8 uppercase tracking-widest text-[#A1A1AA]">
              subscribe to our newsletter
            </p>
            <input
              type="email"
              placeholder="enter your email"
              className="mb-4 w-[30ch] rounded-md p-3 text-black md:w-[35ch]"
            />
            <button className="mb-4 rounded-md bg-black p-3 px-5 transition-transform duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
        <div className="pt-5 lg:pt-10">
          <hr className="opacity-30" />
          <p className="pt-5 font-inter text-xs text-white">
            &#169; Copyright {date.getFullYear()}, All Rights Reserved by Logo
          </p>
        </div>
      </footer>
      <footer className="flex flex-col items-center justify-center bg-secondary px-[10vw] py-10 font-manjari text-xs font-bold md:px-[5vw] lg:hidden">
        <div className="w-[120px] sm:w-[150px]">
          <img src={logo} alt="logo" className="mx-auto w-full" />
        </div>
        <div className="mt-8 flex w-full justify-around">
          <div className="text-left text-white">
            <div className="flex gap-2">
              <img src={contactIcon} alt="Contact" />
              <p>+94 75 494 7171</p>
            </div>
            <div className="flex gap-2 pt-3">
              <img src={emailIcon} alt="Contact" />
              <p>infoespressozen@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4">
              <img
                src={instagramIconMobile}
                alt="Intagram"
                className="w-full"
              />
            </div>
            <div className="w-4">
              <img src={facebookIconMobile} alt="Facebook" className="w-full" />
            </div>
            <div className="w-4">
              <img src={whatsappIconMobile} alt="Whatsapp" className="w-full" />
            </div>
          </div>
        </div>
        <form className="relative mt-8 flex">
          <button className="absolute left-0 top-0 h-full rounded bg-primary px-4">
            <img src={envelopeIcon} alt="Submit" className="w-4" />
          </button>
          <input
            type="email"
            placeholder="Enter E-mail"
            className="w-[35ch] rounded pb-[1px] ps-16 pt-[7px] font-manjari font-bold"
          />
        </form>
      </footer>
    </>
  );
};

export default Footer;
