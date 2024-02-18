import { useDispatch } from "react-redux";
import { setRequestProposalInputs } from "../../../store/appSlice";

const CalcForm = ({ calcQuotes, requestProposalInputs }) => {
  const dispatch = useDispatch();

  const handleChange = (param) => (e) =>
    dispatch(
      setRequestProposalInputs({
        ...requestProposalInputs,
        [param]: e.target.value,
      })
    );

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      <input
        required
        type="text"
        value={requestProposalInputs.fName}
        onChange={handleChange("fName")}
        placeholder="First name*"
        className="outline-none border border-cyan-400 rounded-md w-72 h-10 px-2.5 bg-transparent"
      />
      <input
        required
        type="text"
        value={requestProposalInputs.lName}
        onChange={handleChange("lName")}
        placeholder="Last name*"
        className="outline-none border border-cyan-400 rounded-md w-72 h-10 px-2.5 bg-transparent"
      />
      <input
        required
        type="text"
        value={requestProposalInputs.email}
        onChange={handleChange("email")}
        placeholder="Email address*"
        className="outline-none border border-cyan-400 rounded-md w-72 h-10 px-2.5 bg-transparent"
      />
      <input
        required
        type="text"
        value={requestProposalInputs.phone}
        onChange={handleChange("phone")}
        placeholder="Phone number*"
        className="outline-none border border-cyan-400 rounded-md w-72 h-10 px-2.5 bg-transparent"
      />
      <input
        type="text"
        value={requestProposalInputs.company}
        onChange={handleChange("company")}
        placeholder="Company"
        className="outline-none border border-cyan-400 rounded-md w-72 h-10 px-2.5 bg-transparent"
      />
      <input
        type="text"
        value={requestProposalInputs.website}
        onChange={handleChange("website")}
        placeholder="Website"
        className="outline-none border border-cyan-400 rounded-md w-72 h-10 px-2.5 bg-transparent"
      />
      <div className="col-span-1 sm:col-span-2">
        <h3 className="text-2xl font-architects-daughter text-emerald-400">
          Quote
        </h3>
        {Object.keys(calcQuotes).map((i) => (
          <div key={i}>
            <span>{i}: </span>
            <span className="text-cyan-400 font-light">{calcQuotes[i]}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CalcForm;
