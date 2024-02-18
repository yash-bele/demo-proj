import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { faqData } from "../configs/faq";

const Faqs = () => {
  const [faq, setFaq] = useState(0);

  return (
    <section className="mx-5 md:mx-20 mt-7 mb-10">
      <h1 className="text-2xl md:text-3xl text-slate-500 mb-3">
        Frequently asked <span className="text-emerald-400">questions?</span>
      </h1>
      <section className="space-y-2.5 font-light">
        {faqData.map((i, j) => (
          <div
            key={j}
            onClick={() => {
              faq === j ? setFaq(null) : setFaq(j);
            }}
            className={`shadow hover:bg-emerald-50 duration-200 text-base px-3 md:px-5 py-2.5 rounded-lg cursor-default ${
              faq === j ? "bg-emerald-50" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="space-x-2.5 flex items-center">
                <span className="text-emerald-500">{j + 1}</span>
                <span>{i.que}</span>
              </p>
              <div>
                <BsChevronDown
                  className={`text-emerald-500 duration-200 ${
                    faq === j ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`duration-200 grid ${
                faq === j ? "active opacity-100" : "inactive opacity-0"
              }`}
            >
              <div className="overflow-hidden">{i.ans}</div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Faqs;
