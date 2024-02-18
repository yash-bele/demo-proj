import { useDispatch, useSelector } from "react-redux";
import { setRequestProposalInputs } from "../store/appSlice";
import { setIsOpenRequestProposal } from "../store/appSlice";
import { IoCloseOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { services } from "../configs/services";
import axios from "axios";

const RequestProposal = () => {
  const dispatch = useDispatch();
  const { requestProposalInputs } = useSelector((store) => store.app);

  const handleChange = (param) => (e) =>
    dispatch(
      setRequestProposalInputs({
        ...requestProposalInputs,
        [param]: e.target.value,
      })
    );
  const handleQuotes = (param) => {
    if (requestProposalInputs.quotes.includes(param)) {
      const quotes = requestProposalInputs.quotes.filter((i) => i !== param);
      dispatch(
        setRequestProposalInputs({
          ...requestProposalInputs,
          quotes,
        })
      );
    } else {
      dispatch(
        setRequestProposalInputs({
          ...requestProposalInputs,
          quotes: [...requestProposalInputs.quotes, param],
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(requestProposalInputs);
    axios
      .post("https://adiya-2-server.vercel.app/proposal", {
        ...requestProposalInputs,
        calcQuotes: {
          "Number of pages": "",
          "Style of design": "",
          "Copywriting no. of pages": "",
          "SEO placement guarantee": "",
          "Responsive design": "",
          "Database integration": "",
          "E-Commerce functionality": "",
          CMS: "",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="relative h-screen flex flex-col items-center p-5 pb-5 bg-slate-900 overflow-y-scroll">
      <section className="text-center space-y-1 text-slate-400">
        <h1 className="text-2xl">Request proposal</h1>
        <h3 className="text-lg">
          Fill out our form & we’ll be in touch shortly
        </h3>
      </section>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-300"
      >
        <input
          required
          type="text"
          placeholder="First name"
          value={requestProposalInputs.fName}
          onChange={handleChange("fName")}
          className="h-10 outline-none border border-slate-500 focus:border-slate-400 duration-200 px-2.5 rounded-md bg-transparent w-full"
        />
        <input
          required
          type="text"
          placeholder="Last name"
          value={requestProposalInputs.lName}
          onChange={handleChange("lName")}
          className="h-10 outline-none border border-slate-500 focus:border-slate-400 duration-200 px-2.5 rounded-md bg-transparent w-full"
        />
        <input
          required
          type="email"
          placeholder="Email address"
          value={requestProposalInputs.email}
          onChange={handleChange("email")}
          className="h-10 outline-none border border-slate-500 focus:border-slate-400 duration-200 px-2.5 rounded-md bg-transparent w-full"
        />
        <input
          required
          type="number"
          placeholder="Phone number"
          value={requestProposalInputs.phone}
          onChange={handleChange("phone")}
          className="h-10 outline-none border border-slate-500 focus:border-slate-400 duration-200 px-2.5 rounded-md bg-transparent w-full"
        />
        <section className="col-span-1 sm:col-span-2 text-slate-400 mt-2.5 select-none">
          <h4 className="text-xl mb-1">Quotes</h4>
          <div className="space-y-2.5">
            {Object.keys(services).map((i) => (
              <div
                key={services[i].heading}
                onClick={() => handleQuotes(services[i].heading)}
                style={{
                  backgroundColor: requestProposalInputs.quotes.includes(
                    services[i].heading
                  )
                    ? "#334155"
                    : "",
                }}
                className="h-10 outline-none border border-slate-700 px-2.5 rounded-md bg-transparent w-full flex items-center space-x-1 cursor-pointer"
              >
                {requestProposalInputs.quotes.includes(services[i].heading) ? (
                  <MdCheckBox className="text-xl text-emerald-500" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-xl" />
                )}
                <span>{services[i].heading}</span>
              </div>
            ))}
          </div>
        </section>
        <textarea
          type="text"
          rows={5}
          placeholder="Project details"
          value={requestProposalInputs.projectDetails}
          onChange={handleChange("projectDetails")}
          className="col-span-1 sm:col-span-2 outline-none border border-slate-500 focus:border-slate-400 duration-200 px-2.5 pt-1.5 rounded-md bg-transparent w-full resize-none mt-5"
        />
        <button className="col-span-1 sm:col-span-2 bg-emerald-500 hover:bg-emerald-600 duration-200 rounded-md h-10 mt-2.5 text-xl text-white">
          Submit
        </button>
      </form>
      <IoCloseOutline
        onClick={() => dispatch(setIsOpenRequestProposal(false))}
        className="absolute top-5 right-5 text-3xl cursor-pointer text-slate-300"
      />
    </main>
  );
};

export default RequestProposal;
