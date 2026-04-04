import StepOne from "./LabForm";
import { TextField } from "./TextField";

export const StepThree = ({ onBack, handleContinue }) => {
    return (  <div className="bg-[#f4f4f4] flex justify-center items-center">
    <div className="w-[480px] h-[655px] bg-white ">
      <h1>Join Us </h1>
      <p>Please provide all current information accurately.</p>
      <TextField
        value={Date}
        onChange={(e)=>setDate(e.target.value)}
        type="date"
        placeholder="2004-12-18"s
        label="Date of Birth"s
      />
      <TextField
        value={File}
        onChange={(e)=>setFile(e.target.value)}
        type="file"
        label="Profile image"
      />
      <div className="flex gap-3 mt-10">
        <button
          onClick={onBack}
          className="flex justify-center items-center w-full h-11 border border-gray-300 rounded-md text-sm font-medium text-gray-700"
        >
          ← Back
        </button>
        <button
          onClick={handleContinue}
          className="flex justify-center items-center w-full h-11 bg-black rounded-md text-white text-sm font-medium"
        >
          Continue 2/3 →
        </button>
      </div>
    </div>
  </div>)   

};
export default StepThree;