import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRequestProposal } from "../../store/appSlice";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";

const Banner = () => {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const { accessibility } = useSelector((store) => store.app);
  const [sound, setSound] = useState(false);
  const [illumination, setIllumination] = useState(false);

  useEffect(() => {
    sound ? audioRef?.current?.play() : audioRef?.current?.pause();
  }, [sound]);

  return (
    <main className="relative h-auto lg:h-screen flex flex-col lg:flex-row text-white">
      <section
        className={`w-auto lg:w-[40%] bg-cover bg-center grid place-items-center px-5 sm:px-10 xl:px-20 h-[calc(35vh-56px)] lg:h-auto ${
          accessibility.hideImages ? "bg-none" : "bg-[url(/stacked-peaks.svg)]"
        }`}
      >
        <div className="space-y-5">
          <h1 className="text-4xl sm:text-5xl font-serif">
            We are India's only startup kickstarter under one roof solution
          </h1>
          <p className="hidden lg:block">
            We proudly stand as the sole Startup Kickstarter in the Indian
            Diaspora. So, don't just get excited about Shark Tank; we are here
            to fuel your startup dreams with our expertise. Startups are like
            babies, cherished by their founders with all their hearts, but even
            they don't always know what to do with them—that's where we come
            into the picture.
          </p>
          <button
            onClick={() => dispatch(setIsOpenRequestProposal(true))}
            className="border border-white px-5 py-2.5 rounded-md text-xl hover:bg-white hover:text-emerald-500 duration-200 hidden lg:block"
          >
            Get my custom quote
          </button>
        </div>
      </section>
      <section className="w-auto lg:w-[60%]">
        {!illumination && (
          <>
            <video
              autoPlay
              muted
              playsInline
              className="object-cover object-center h-full hidden lg:block"
              src="/adiya-night.mp4"
            ></video>
            <div
              className={`relative w-full h-[calc(65vh)] bg-cover bg-center block lg:hidden ${
                accessibility.hideImages
                  ? "bg-none"
                  : "bg-[url(/night-mobile.png)]"
              }`}
            >
              <div className="absolute bottom-0 left-0 flex flex-col justify-end px-5 sm:px-20 pb-5 space-y-5 text-sm font-light text-slate-300 bg-gradient-to-b from-black/0 via-black/25 to-black/50 h-full">
                <p className="font-serif text-xl -mb-2.5">
                  Adiya Business Solution
                </p>
                <p>
                  We proudly stand as the sole Startup Kickstarter in the Indian
                  Diaspora. So, don't just get excited about Shark Tank; we are
                  here to fuel your startup dreams with our expertise. Startups
                  are like babies, cherished by their founders with all their
                  hearts, but even they don't alway know what to do with
                  them—that's where we come into the picture.
                </p>
                <button
                  onClick={() => dispatch(setIsOpenRequestProposal(true))}
                  className="border border-slate-300 hover:border-emerald-500 px-5 py-2.5 rounded-md text-lg hover:bg-emerald-500 hover:text-white duration-200 w-fit"
                >
                  Get my custom quote
                </button>
              </div>
            </div>
          </>
        )}
        {illumination && (
          <>
            <video
              autoPlay
              muted
              playsInline
              className="object-cover object-center h-full hidden lg:block"
              src="/adiya-day.mp4"
            ></video>
            <div
              className={`relative w-full h-[calc(65vh)] bg-cover bg-center block lg:hidden ${
                accessibility.hideImages
                  ? "bg-none"
                  : "bg-[url(/day-mobile.png)]"
              }`}
            >
              <div className="absolute bottom-0 left-0 flex flex-col justify-end px-5 sm:px-20 pb-5 space-y-5 text-sm font-light text-white bg-gradient-to-b h-full">
                <p className="font-serif text-xl -mb-2.5">
                  Adiya Business Solution
                </p>
                <p>
                  We proudly stand as the sole Startup Kickstarter in the Indian
                  Diaspora. So, don't just get excited about Shark Tank; we are
                  here to fuel your startup dreams with our expertise. Startups
                  are like babies, cherished by their founders with all their
                  hearts, but even they don't alway know what to do with
                  them—that's where we come into the picture.
                </p>
                <button
                  onClick={() => dispatch(setIsOpenRequestProposal(true))}
                  className="border border-slate-300 hover:border-emerald-500 px-5 py-2.5 rounded-md text-lg hover:bg-emerald-500 hover:text-white duration-200 w-fit"
                >
                  Get my custom quote
                </button>
              </div>
            </div>
          </>
        )}
      </section>
      <section className="absolute h-fit lg:top-0 top-[calc(35vh-56px+20px)] lg:bottom-0 lg:my-auto right-5 lg:left-[40%] space-y-2.5">
        <button
          onClick={() => setIllumination(!illumination)}
          className="relative bg-gradient-to-b from-emerald-600 to-emerald-500 border-4 border-emerald-400 w-32 h-14 rounded-full -ml-16"
        >
          <span
            className={`absolute top-1 w-10 h-10 bg-white rounded-full grid place-items-center text-slate-700 text-xl duration-200 ${
              illumination ? "right-[76px]" : "right-1"
            }`}
          >
            <BsSun
              className={`absolute duration-200 ${
                !illumination ? "invisible opacity-0" : "visible opacity-100"
              }`}
            />
            <BsMoonStars
              className={`absolute duration-200 ${
                illumination ? "invisible opacity-0" : "visible opacity-100"
              }`}
            />
          </span>
        </button>
        <button
          onClick={() => setSound(!sound)}
          className="relative bg-gradient-to-b from-slate-800 to-slate-700 border-4 border-slate-600 w-32 h-14 rounded-full -ml-16 hidden lg:block"
        >
          <span
            className={`absolute top-1 w-10 h-10 bg-white rounded-full grid place-items-center text-slate-700 text-xl duration-200 ${
              sound ? "right-[76px]" : "right-1"
            }`}
          >
            <RxSpeakerLoud
              className={`absolute duration-200 ${
                !sound ? "invisible opacity-0" : "visible opacity-100"
              }`}
            />
            <RxSpeakerOff
              className={`absolute duration-200 ${
                sound ? "invisible opacity-0" : "visible opacity-100"
              }`}
            />
          </span>
        </button>
      </section>
      <audio
        ref={audioRef}
        controls
        src="/music.mp3"
        className="hidden"
      ></audio>
    </main>
  );
};

export default Banner;
