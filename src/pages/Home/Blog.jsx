import { useSelector } from "react-redux";
import { blog } from "../../configs/blog";

const Blog = () => {
  const { accessibility } = useSelector((store) => store.app);

  return (
    <main className="h-auto xl:h-[calc(100vh-56px)] bg-[url(/bg-blog2.jpg)] bg-cover bg-center xl:bg-auto">
      <main className="w-full h-full bg-white/50 grid place-items-center">
        <main className="mt-7 mb-10 xl:mt-0 xl:mb-3 flex flex-col items-center">
          <h1 className="text-center text-4xl sm:text-5xl mb-2.5 text-slate-500 mx-5 font-serif">
            Blog
          </h1>
          <p className="text-center mb-5 text-base sm:text-lg mx-5">
            Check back every week for inspiring articles to help build and
            expand your digital presence.
          </p>
          <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blog.map((i, j) => (
              <section
                key={j}
                className="group h-[480px] w-[350px] sm:w-[400px] rounded-xl overflow-hidden shadow-md bg-white"
              >
                <div className="w-full h-[50%] overflow-hidden">
                  <div
                    style={{
                      backgroundImage: accessibility.hideImages
                        ? ""
                        : `url(${i.img})`,
                    }}
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 duration-300 bg-slate-100"
                  ></div>
                </div>
                <div className="px-5 py-5 space-y-2.5">
                  <span className="font-serif text-slate-400">{i.date}</span>
                  <h2 className="text-xl text-emerald-500 hidden sm:block">
                    {i.title.substring(0, 38)}...
                  </h2>
                  <h2 className="text-xl text-emerald-500 block sm:hidden">
                    {i.title.substring(0, 30)}...
                  </h2>
                  <p className="text-base hidden sm:block leading-tight">
                    {i.para.substring(0, 275)}...
                  </p>
                  <p className="text-sm block sm:hidden">
                    {i.para.substring(0, 275)}...
                  </p>
                </div>
              </section>
            ))}
          </main>
        </main>
      </main>
    </main>
  );
};

export default Blog;
