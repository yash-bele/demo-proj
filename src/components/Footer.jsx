import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
  const [openAdiya, setOpenAdiya] = useState(false);
  const [openLearn, setOpenLearn] = useState(false);

  return (
    <>
      <footer
        id="footer"
        className="bg-slate-900 text-white flex flex-col space-y-10 p-5 sm:p-8 md:p-16 lg:p-20 border-t border-t-slate-700"
      >
        <section className="flex justify-between">
          <div className="space-y-2">
            <span className="text-white font-architects-daughter text-xl leading-none">
              Adiya
            </span>
            <address className="text-sm text-slate-400">
              Office1: Level 1, Gate Avenue, Next to DCB Bank, Andheri, Mumbai
            </address>
            <address className="text-sm text-slate-400">
              Office 2: c-22 paradise garden bakshi talaav sitapur road near K.E
              polytechnic college lucknow uttar pradesh
            </address>
            <address className="text-sm text-slate-400">
              Office 3: 412, sanjay nagar bansu appartment near bank of baroda
              bangalore
            </address>
          </div>
          <a
            href="#"
            className="p-1 rounded-md w-fit h-fit bg-slate-700 hover:bg-emerald-500 duration-200 hidden sm:block cursor-pointer"
          >
            <MdKeyboardArrowDown className="rotate-180 text-3xl" />
          </a>
        </section>
        <section className="space-y-1.5 md:space-y-0 md:space-x-32 block md:flex items-start">
          <div>
            <p
              onClick={() => setOpenAdiya(!openAdiya)}
              className="flex items-center justify-between"
            >
              <span>Company</span>
              <span
                className={`border border-slate-500 p-px rounded-full inline md:hidden`}
              >
                <MdKeyboardArrowDown
                  className={`duration-300 ${
                    openAdiya ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </p>
            <ul
              className={`text-slate-400 border-l md:border-l-0 border-l-slate-500 pl-3 md:pl-0 overflow-hidden duration-200 h-0 md:h-[calc(74.4px)] mt-1.5 ${
                openAdiya ? "h-[calc(74.4px)]" : "h-0"
              }`}
            >
              <li className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-emerald-500 w-fit">
                Home
              </li>
              <li className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-emerald-500 w-fit">
                About us
              </li>
              <li className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-emerald-500 w-fit">
                What we do
              </li>
            </ul>
          </div>
          <div>
            <p
              onClick={() => setOpenLearn(!openLearn)}
              className="flex items-center justify-between"
            >
              <span>Learn</span>
              <span
                className={`border border-slate-500 p-px rounded-full inline md:hidden`}
              >
                <MdKeyboardArrowDown
                  className={`duration-300 ${
                    openLearn ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </p>
            <ul
              className={`text-slate-400 border-l md:border-l-0 border-l-slate-500 pl-3 md:pl-0 overflow-hidden duration-200 h-0 md:h-[calc(74.4px)] mt-1.5 ${
                openLearn ? "h-[calc(74.4px)]" : "h-0"
              }`}
            >
              <li className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-emerald-500 w-fit">
                Blog
              </li>
              <li className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-emerald-500 w-fit">
                FAQs
              </li>
              <li className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-emerald-500 w-fit">
                Glossary
              </li>
            </ul>
          </div>
          <div>
            <p>Connect with us</p>
            <p className="text-slate-400 border-b border-b-transparent hover:border-b-emerald-500 w-fit duration-200 cursor-pointer hover:text-white text-sm mt-1">
              proposal@adiyabusinesssolution.com
            </p>
            <p className="text-slate-400 border-b border-b-transparent hover:border-b-emerald-500 w-fit duration-200 cursor-pointer hover:text-white text-sm mt-1">
              Phone: +91 93721 94890
            </p>
            <div className="mt-3 flex items-center space-x-3">
              <a
                href="https://in.linkedin.com/company/adiya-business-solution"
                className="bg-slate-700 hover:bg-emerald-500 duration-200 cursor-pointer rounded-full p-1.5 w-fit"
              >
                <BiLogoLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.facebook.com/adiyabusinesssolution?mibextid=LQQJ4d"
                className="bg-slate-700 hover:bg-emerald-500 duration-200 cursor-pointer rounded-full p-1.5 w-fit"
              >
                <BiLogoFacebookCircle className="text-lg" />
              </a>
              <p className="bg-slate-700 hover:bg-emerald-500 duration-200 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoTwitter className="text-lg" />
              </p>
              <p className="bg-slate-700 hover:bg-emerald-500 duration-200 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoInstagram className="text-lg" />
              </p>
            </div>
          </div>
        </section>
        <section className="text-slate-400 space-y-1 md:space-y-0 text-sm md:flex items-center md:divide-x">
          <p className="md:pr-3">© 2023 Adiya. All rights reserved</p>
          <p className="border-b border-b-transparent hover:border-b-emerald-500 duration-200 w-fit cursor-pointer hover:text-white md:px-3">
            Terms of Use
          </p>
          <p className="border-b border-b-transparent hover:border-b-emerald-500 duration-200 w-fit cursor-pointer hover:text-white md:px-3">
            Key Risks
          </p>
          <p className="border-b border-b-transparent hover:border-b-emerald-500 duration-200 w-fit cursor-pointer hover:text-white md:px-3">
            Privacy Policy
          </p>
          <p className="border-b border-b-transparent hover:border-b-emerald-500 duration-200 w-fit cursor-pointer hover:text-white md:pl-3">
            Cookies Notice
          </p>
        </section>
        <div className="h-px bg-slate-700"></div>
        <p className="text-slate-400 text-xs">
          The Adiya platform consists of the website, web platform and mobile
          app. By using Adiya, you agree to be bound by the Terms & Conditions,
          Cookie Notice and Privacy Policy.
        </p>
      </footer>
    </>
  );
};

export default Footer;
