import { BsCheck2Circle } from "react-icons/bs";

const PhotoFlower = () => {
  return (
    <section className="px-5 lg:px-20 py-10 flex flex-col-reverse lg:flex-row items-center justify-center space-x-0 lg:space-x-20 bg-[url(/bg-photoflower.jpg)] bg-cover bg-center h-auto lg:h-[calc(100vh-56px)]">
      <section className="grid grid-cols-2 w-fit gap-2.5 lg:gap-5">
        <div className="bg-[url(https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center w-40 lg:w-52 h-44 lg:h-52 rounded-br-[50%]"></div>
        <div className="bg-[url(https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center w-40 lg:w-52 h-44 lg:h-52 rounded-tr-[50%]"></div>
        <div className="bg-[url(https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center w-40 lg:w-52 h-44 lg:h-52 rounded-bl-[50%]"></div>
        <div className="bg-[url(https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center w-40 lg:w-52 h-44 lg:h-52 rounded-tl-[50%]"></div>
      </section>
      <section className="w-full lg:w-[500px] text-white space-y-5 mb-5 lg:mb-0">
        <div className="space-y-5 text-center lg:text-start">
          <h1 className="text-4xl lg:text-5xl text-white font-serif">
            We provide quality service in the town
          </h1>
          <p className="text-sm lg:text-base">
            Each of our websites is designed and developed to be mobile
            responsive first and foremost to provide the best user experience—no
            matter the type of device. Our company offers the best value +
            long-term satisfaction and increased sales.
          </p>
          <p className="text-sm lg:text-base">
            Our experienced, proven project managers ensure our clients’
            projects are hyper-organized, well managed, and meet clear
            expectations on time. We serve a potent mix of web design &
            development, brand strategy, and digital marketing.
          </p>
        </div>
        <div className="space-y-1">
          <p className="flex items-center">
            <BsCheck2Circle className="text-xl mr-1.5" />
            <span>Top level project management</span>
          </p>
          <p className="flex items-center">
            <BsCheck2Circle className="text-xl mr-1.5" />
            <span>Full service experience</span>
          </p>
          <p className="flex items-center">
            <BsCheck2Circle className="text-xl mr-1.5" />
            <span>World class value</span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default PhotoFlower;
