import { GiProcessor, GiMaterialsScience, GiSparkles } from "react-icons/gi";

const WhyChooseUs = () => {
  return (
    <main className="font-montserrat px-5 md:px-20 py-10 grid place-items-center bg-[url(/bg-whychooseus.svg)]">
      <main>
        {/* <div className="mb-3">
          <h1 className="text-3xl text-white font-bold text-center">
            Why choose us!
          </h1>
        </div> */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <section className="relative group shadow-md bg-white duration-200 rounded-xl p-5 space-y-2.5 overflow-hidden cursor-default">
            <div className="p-2.5 rounded-full border border-emerald-500 bg-emerald-50 w-fit">
              <GiProcessor className="text-3xl text-emerald-500 group-hover:animate-spin" />
            </div>
            <p className="text-xl text-emerald-500">Process enablement</p>
            <p className="text-base leading-tight text-slate-500">
              We work very closely with clients to provide consulting,
              maintaining, and facilitating process re-engineering as required
              to enable client for success in this changing world.
            </p>
            <div className="absolute w-32 group-hover:w-36 h-32 group-hover:h-36 rounded-full bg-emerald-100 -top-[calc(10px+60px)] -right-[60px] duration-500"></div>
          </section>
          <section className="relative group shadow-md bg-white duration-200 rounded-xl p-5 space-y-2.5 overflow-hidden cursor-default">
            <div className="p-2.5 rounded-full border border-emerald-500 bg-emerald-50 w-fit">
              <GiMaterialsScience className="text-3xl text-emerald-500 group-hover:animate-spin" />
            </div>
            <p className="text-xl text-emerald-500">We innovate for you</p>
            <p className="text-base leading-tight text-slate-500">
              We're a team of dreamers, thinkers and creators. We're constabtly
              evolving our products to reach even higher standards for design,
              quality and production.
            </p>
            <div className="absolute w-32 group-hover:w-36 h-32 group-hover:h-36 rounded-full bg-emerald-100 -top-[calc(10px+60px)] -right-[60px] duration-500"></div>
          </section>
          <section className="relative group shadow-md bg-white duration-200 rounded-xl p-5 space-y-2.5 overflow-hidden cursor-default">
            <div className="p-2.5 rounded-full border border-emerald-500 bg-emerald-50 w-fit">
              <GiSparkles className="text-3xl text-emerald-500 group-hover:animate-spin" />
            </div>
            <p className="text-xl text-emerald-500">Our clients are happy</p>
            <p className="text-base leading-tight text-slate-500">
              We've developed and refined our methods through past experirnces.
              Nothing gives us greater pride than seeing our clients delighted
              with the work we've done together.
            </p>
            <div className="absolute w-32 group-hover:w-36 h-32 group-hover:h-36 rounded-full bg-emerald-100 -top-[calc(10px+60px)] -right-[60px] duration-500"></div>
          </section>
        </section>
      </main>
    </main>
  );
};

export default WhyChooseUs;
