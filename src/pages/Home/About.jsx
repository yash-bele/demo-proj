import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <main className="h-[calc(100vh-56px)] bg-[url(/bg-about.jpg)] bg-cover bg-center flex items-center px-5 sm:px-20">
      <section className="w-[600px] space-y-7">
        <h1 className="relative text-7xl text-emerald-300 w-fit font-serif">
          <span>About us !</span>
          <span className="absolute -bottom-2 left-0 right-0 mx-auto bg-emerald-300/50 w-52 h-1 rounded-full"></span>
        </h1>
        <p className="text-slate-300">
          We offer a comprehensive range of services, including Product
          Development, Product Testing, Team Onboarding, Pilot Run, Digital
          Marketing, Promotion, Investment Deck, and Pitch Training. We take
          care of everything, ensuring that your startup journey is supported
          and guided every step of the way.
        </p>
        <button
          onClick={() => navigate("/about")}
          className="border border-white text-white px-5 py-2.5 rounded-md text-xl hover:bg-white hover:text-emerald-500 duration-200"
        >
          Know more about us
        </button>
      </section>
    </main>
  );
};

export default About;
