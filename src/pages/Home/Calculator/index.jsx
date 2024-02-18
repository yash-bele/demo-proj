import { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import CalcForm from "./CalcForm";
import axios from "axios";

const CustomSlider = styled(Slider)({
  color: "#67e8f9",
  height: 7,
  "& .MuiSlider-track": {
    border: "none",
    color: "#67e8f9",
  },
  "& .MuiSlider-thumb": {
    color: "#67e8f9",
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "5px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
});

const Calculator = () => {
  const { requestProposalInputs } = useSelector((store) => store.app);
  const [isShowCalcForm, setIsShowCalcForm] = useState(false);
  const [inputs, setInputs] = useState({
    "Number of pages": 2,
    "Style of design": 2,
    "Copywriting no. of pages": 2,
    "SEO placement guarantee": 2,
    "Responsive design": 2,
    "Database integration": 2,
    "E-Commerce functionality": 2,
    CMS: 2,
  });
  const [calcQuotes, setCalcQuotes] = useState({
    "Number of pages": "10-50",
    "Style of design": "Simple",
    "Copywriting no. of pages": "5-10",
    "SEO placement guarantee": "30",
    "Responsive design": "Yes",
    "Database integration": "Basic",
    "E-Commerce functionality": "Basic",
    CMS: "Standard",
  });

  const handleChange = (param) => (e) => {
    const val = e.target.value;
    setInputs({ ...inputs, [param]: val });
    if (param === "Number of pages") {
      if (val === 1) setCalcQuotes({ ...calcQuotes, [param]: "1-10" });
      if (val === 2) setCalcQuotes({ ...calcQuotes, [param]: "10-50" });
      if (val === 3) setCalcQuotes({ ...calcQuotes, [param]: "50-150" });
      if (val === 4) setCalcQuotes({ ...calcQuotes, [param]: "150-250" });
      if (val === 5) setCalcQuotes({ ...calcQuotes, [param]: "250+" });
    }
    if (param === "Style of design") {
      if (val === 1) setCalcQuotes({ ...calcQuotes, [param]: "None" });
      if (val === 2) setCalcQuotes({ ...calcQuotes, [param]: "Simple" });
      if (val === 3) setCalcQuotes({ ...calcQuotes, [param]: "Moderate" });
      if (val === 4) setCalcQuotes({ ...calcQuotes, [param]: "High end" });
      if (val === 5) setCalcQuotes({ ...calcQuotes, [param]: "World class" });
    }
    if (param === "Copywriting no. of pages") {
      if (val === 1) setCalcQuotes({ ...calcQuotes, [param]: "None" });
      if (val === 2) setCalcQuotes({ ...calcQuotes, [param]: "5-10" });
      if (val === 3) setCalcQuotes({ ...calcQuotes, [param]: "10-25" });
      if (val === 4) setCalcQuotes({ ...calcQuotes, [param]: "25-50" });
    }
    if (param === "SEO placement guarantee") {
      if (val === 1) setCalcQuotes({ ...calcQuotes, [param]: "None" });
      if (val === 2) setCalcQuotes({ ...calcQuotes, [param]: "30" });
      if (val === 3) setCalcQuotes({ ...calcQuotes, [param]: "80" });
      if (val === 4) setCalcQuotes({ ...calcQuotes, [param]: "150" });
    }
    if (param === "Responsive design") {
      if (val === 1) setCalcQuotes({ ...calcQuotes, [param]: "No" });
      if (val === 2) setCalcQuotes({ ...calcQuotes, [param]: "Yes" });
    }
    if (param === "Database integration") {
      if (val === 1) setCalcQuotes({ ...calcQuotes, [param]: "None" });
      if (val === 2) setCalcQuotes({ ...calcQuotes, [param]: "Basic" });
      if (val === 3) setCalcQuotes({ ...calcQuotes, [param]: "Advance" });
      if (val === 4) setCalcQuotes({ ...calcQuotes, [param]: "Full" });
    }
    if (param === "E-Commerce functionality") {
      if (val === 1) setCalcQuotes({ ...calcQuotes, [param]: "None" });
      if (val === 2) setCalcQuotes({ ...calcQuotes, [param]: "Basic" });
      if (val === 3) setCalcQuotes({ ...calcQuotes, [param]: "Advance" });
      if (val === 4) setCalcQuotes({ ...calcQuotes, [param]: "Enterprice" });
    }
    if (param === "CMS") {
      if (val === 1) setCalcQuotes({ ...calcQuotes, [param]: "None" });
      if (val === 2) setCalcQuotes({ ...calcQuotes, [param]: "Standard" });
      if (val === 3) setCalcQuotes({ ...calcQuotes, [param]: "Advance" });
      if (val === 4) setCalcQuotes({ ...calcQuotes, [param]: "Enterprice" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...requestProposalInputs, calcQuotes });
    axios
      .post("https://adiya-2-server.vercel.app/proposal", {
        ...requestProposalInputs,
        calcQuotes,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex flex-col items-center bg-[url(/bg-calculator.jpg)] bg-cover bg-top text-white py-10 space-y-10 bg-indigo-950">
      <h1 className="text-4xl sm:text-5xl text-cyan-300 font-serif lg:mb-0">
        Qoute calculator
      </h1>

      <form
        onSubmit={handleSubmit}
        className="h-auto flex flex-col items-center justify-center space-y-10 mb-10 lg:mb-0"
      >
        {!isShowCalcForm ? (
          <main className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <section className="flex flex-col items-center">
              <span>Number of pages</span>
              <div className="w-72">
                <CustomSlider
                  value={inputs["Number of pages"]}
                  onChange={handleChange("Number of pages")}
                  step={1}
                  min={1}
                  max={5}
                />
              </div>
              <div className="w-32 h-10 bg-cyan-500 rounded-md grid place-items-center text-lg">
                {calcQuotes["Number of pages"]}
              </div>
            </section>
            <section className="flex flex-col items-center">
              <span>Style of design</span>
              <div className="w-72">
                <CustomSlider
                  value={inputs["Style of design"]}
                  onChange={handleChange("Style of design")}
                  step={1}
                  min={1}
                  max={5}
                />
              </div>
              <div className="w-32 h-10 bg-cyan-500 rounded-md grid place-items-center text-lg">
                {calcQuotes["Style of design"]}
              </div>
            </section>
            <section className="flex flex-col items-center">
              <span>Copywriting no. of pages</span>
              <div className="w-72">
                <CustomSlider
                  value={inputs["Copywriting no. of pages"]}
                  onChange={handleChange("Copywriting no. of pages")}
                  step={1}
                  min={1}
                  max={4}
                />
              </div>
              <div className="w-32 h-10 bg-cyan-500 rounded-md grid place-items-center text-lg">
                {calcQuotes["Copywriting no. of pages"]}
              </div>
            </section>
            <section className="flex flex-col items-center">
              <span>SEO placement guarantee</span>
              <div className="w-72">
                <CustomSlider
                  value={inputs["SEO placement guarantee"]}
                  onChange={handleChange("SEO placement guarantee")}
                  step={1}
                  min={1}
                  max={4}
                />
              </div>
              <div className="w-32 h-10 bg-cyan-500 rounded-md grid place-items-center text-lg">
                {calcQuotes["SEO placement guarantee"]}
              </div>
            </section>
            <section className="flex flex-col items-center">
              <span>Responsive design</span>
              <div className="w-72">
                <CustomSlider
                  value={inputs["Responsive design"]}
                  onChange={handleChange("Responsive design")}
                  step={1}
                  min={1}
                  max={2}
                />
              </div>
              <div className="w-32 h-10 bg-cyan-500 rounded-md grid place-items-center text-lg">
                {calcQuotes["Responsive design"]}
              </div>
            </section>
            <section className="flex flex-col items-center">
              <span>Database integration</span>
              <div className="w-72">
                <CustomSlider
                  value={inputs["Database integration"]}
                  onChange={handleChange("Database integration")}
                  step={1}
                  min={1}
                  max={4}
                />
              </div>
              <div className="w-32 h-10 bg-cyan-500 rounded-md grid place-items-center text-lg">
                {calcQuotes["Database integration"]}
              </div>
            </section>
            <section className="flex flex-col items-center">
              <span>E-Commerce functionality</span>
              <div className="w-72">
                <CustomSlider
                  value={inputs["E-Commerce functionality"]}
                  onChange={handleChange("E-Commerce functionality")}
                  step={1}
                  min={1}
                  max={4}
                />
              </div>
              <div className="w-32 h-10 bg-cyan-500 rounded-md grid place-items-center text-lg">
                {calcQuotes["E-Commerce functionality"]}
              </div>
            </section>
            <section className="flex flex-col items-center">
              <span>CMS</span>
              <div className="w-72">
                <CustomSlider
                  value={inputs.CMS}
                  onChange={handleChange("CMS")}
                  step={1}
                  min={1}
                  max={4}
                />
              </div>
              <div className="w-32 h-10 bg-cyan-500 rounded-md grid place-items-center text-lg">
                {calcQuotes.CMS}
              </div>
            </section>
          </main>
        ) : (
          <CalcForm
            calcQuotes={calcQuotes}
            requestProposalInputs={requestProposalInputs}
          />
        )}

        {!isShowCalcForm ? (
          <button
            onClick={() => setIsShowCalcForm(!isShowCalcForm)}
            className="border border-slate-200 hover:border-blue-400 hover:bg-blue-400 duration-200 px-5 py-1.5 text-lg rounded-md"
          >
            Next
          </button>
        ) : (
          <div className="space-x-2.5">
            <button
              onClick={() => setIsShowCalcForm(!isShowCalcForm)}
              className="border border-slate-200 hover:border-red-400 hover:bg-red-400 duration-200 px-5 py-1.5 text-lg rounded-md"
            >
              Go back
            </button>
            <button
              type="submit"
              className="border border-slate-200 hover:border-blue-400 hover:bg-blue-400 duration-200 px-5 py-1.5 text-lg rounded-md w-[107.91px]"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </main>
  );
};

export default Calculator;
