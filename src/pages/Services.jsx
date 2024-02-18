import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRequestProposal } from "../store/appSlice";
import { services } from "../configs/services";

const Services = () => {
  const { param } = useParams();
  const { heading, para, img } = services[param];
  const dispatch = useDispatch();
  const { accessibility } = useSelector((store) => store.app);

  return (
    <main className="flex items-center justify-between mx-5 sm:mx-20 mt-7 mb-10 xl:my-0 h-auto xl:h-[calc(100vh-56px)] space-x-10 font-light">
      <section className="space-y-5 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-5xl text-emerald-400 sm:text-emerald-300 text-center xl:text-start">
          {heading}
        </h1>
        {!accessibility.hideImages && (
          <img src={img} className="w-full block xl:hidden rounded-xl" />
        )}
        {para}
        <button
          onClick={() => dispatch(setIsOpenRequestProposal(true))}
          className="border border-emerald-500 px-5 py-2.5 rounded-md text-xl hover:bg-emerald-500 text-emerald-500 hover:text-white duration-200"
        >
          Let's get started
        </button>
      </section>
      {!accessibility.hideImages && (
        <img
          src={img}
          className={`w-[40%] hidden xl:block rounded-xl ${
            param === "game-&-graphic-development" ? "h-[60%]" : "h-auto"
          }`}
        />
      )}
    </main>
  );
};

export default Services;
