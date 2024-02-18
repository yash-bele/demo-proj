import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import ServicesMenu from "./ServicesMenu";
import ResponsiveMenu from "./ResponsiveMenu";

export const navData = [
  {
    link: "Home",
    to: "/",
  },
  {
    link: "About",
    to: "/about",
  },
  {
    link: "Services",
  },
  {
    link: "Faqs",
    to: "/faqs",
  },
  // {
  //   link: "Contact",
  //   to: "/contact",
  // },
];

const Navbar = ({ accessibility }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [navBg, setNavBg] = useState(false);
  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY >= 56 ? setNavBg(true) : setNavBg(false);
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleRedirect = (i) =>
    i.link !== "Services" ? navigate(`${i.to}`) : null;

  return (
    <>
      <nav
        id="navbar"
        className={`px-5 sm:px-10 xl:px-20 h-14 w-full z-10 top-0 text-white flex items-center justify-between ${
          pathname.length > 1
            ? "bg-emerald-500 sticky shadow"
            : navBg
            ? "bg-emerald-500 fixed shadow"
            : "bg-emerald-500 lg:bg-transparent shadow lg:shadow-none sticky lg:fixed"
        }`}
      >
        <section onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="font-architects-daughter text-3xl">Adiya</h1>
        </section>
        <section
          className={`relative font-extralight hidden lg:block ${
            accessibility.biggerText ? "text-xl" : "text-lg"
          }`}
        >
          <div className="space-x-5">
            {navData.map((i) => (
              <span
                key={i.link}
                onMouseEnter={() =>
                  i.link === "Services" && setIsOpenServices(true)
                }
                onMouseLeave={() =>
                  i.link === "Services" && setIsOpenServices(false)
                }
                onClick={() => handleRedirect(i)}
                className={`duration-200 cursor-pointer ${
                  pathname.length > 1
                    ? "hover:text-black"
                    : navBg
                    ? "hover:text-black"
                    : "hover:text-emerald-500"
                }`}
              >
                {i.link}
              </span>
            ))}
          </div>
          <ServicesMenu
            isOpenServices={isOpenServices}
            setIsOpenServices={setIsOpenServices}
          />
        </section>
        <section
          onClick={() => setIsOpenResponsiveMenu(!isOpenResponsiveMenu)}
          className="block lg:hidden text-2xl cursor-pointer"
        >
          {isOpenResponsiveMenu ? <CgClose /> : <HiOutlineMenuAlt1 />}
        </section>
      </nav>
      <ResponsiveMenu
        isOpenResponsiveMenu={isOpenResponsiveMenu}
        setIsOpenResponsiveMenu={setIsOpenResponsiveMenu}
      />
    </>
  );
};

export default Navbar;
