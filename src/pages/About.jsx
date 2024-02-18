import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRequestProposal } from "../store/appSlice";

const About = () => {
  const dispatch = useDispatch();
  const { accessibility } = useSelector((store) => store.app);

  return (
    <main className="flex items-center justify-between mx-5 sm:mx-20 mt-7 mb-10 xl:my-0 h-auto xl:h-[calc(100vh-56px)] space-x-10 font-light">
      <section className="space-y-5 text-sm sm:text-base">
        <h1 className="text-3xl sm:text-5xl text-slate-400">
          At{" "}
          <span className="text-emerald-400 sm:text-emerald-300">
            Adiya Business Solution
          </span>
          , we make technology accessible
        </h1>
        {!accessibility.hideImages && (
          <img src="/about.jpg" className="w-full block xl:hidden rounded-xl" />
        )}
        <p>
          We offer a comprehensive range of services, including Product
          Development, Product Testing, Team Onboarding, Pilot Run, Digital
          Marketing, Promotion, Investment Deck, and Pitch Training. We take
          care of everything, ensuring that your startup journey is supported
          and guided every step of the way.
        </p>
        <p>
          <span className="block text-lg sm:text-xl">Our story</span>
          <span>
            It all began with a simple plan to assist a friend in need during
            our final days of college. Through this experience, we quickly
            realized that embarking on a startup journey is a challenging and
            often thankless endeavor. Motivated by the notion that startups
            deserve more support, we decided to streamline the lives of startup
            founders by providing them with everything they need at their
            disposal. Our aim is to enable them to concentrate solely on
            execution and operations. Over the span of 9 years, we have
            continued this mission, assisting 134 startups in their growth.
            Trust us when we say, the satisfaction derived from this endeavor is
            unparalleled.
          </span>
        </p>
        <p>
          <span className="block text-lg sm:text-xl">Our moto</span>
          <span>
            At the core of our philosophy is the belief in making technology
            easy and accessible. We strive to create stylish, advanced, and
            relevant products, always aiming for grandeur. Our commitment is to
            be the first to introduce innovative approaches, ensuring our
            offerings remain at the forefront of the industry.
          </span>
        </p>
        <button
          onClick={() => dispatch(setIsOpenRequestProposal(true))}
          className="border border-emerald-500 px-5 py-2.5 rounded-md text-xl hover:bg-emerald-500 text-emerald-500 hover:text-white duration-200"
        >
          Let's get started
        </button>
      </section>
      {!accessibility.hideImages && (
        <img
          src="/about.jpg"
          className="w-[40%] h-[60%] hidden xl:block rounded-xl"
        />
      )}
    </main>
  );
};

export default About;
