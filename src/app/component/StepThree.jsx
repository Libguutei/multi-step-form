import { useState } from "react";
import { TextField } from "./TextField";

export const StepThree = ({ onBack, handleContinue }) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Файлыг түр зуур харах URL болгон хувиргах
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-[#f1f1f1]">
      <div className="w-[480px] p-8 bg-white rounded-2xl shadow-sm">
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-sm text-[#8E8E8E] mb-6">
          Please provide all current information accurately.
        </p>

        <div className="space-y-4">
          <TextField
            type="date"
            label="Date of Birth"
            onChange={(e) => console.log(e.target.value)}
          />

       
          <div className="flex flex-col items-center gap-4">
            <label className="w-full text-sm font-medium text-gray-700">Profile image</label>
            <div className="relative w-full h-100 bg-gray-100  overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
              {profileImage ? (
                <img src={profileImage} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs text-gray-400">No Image</span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <p className="text-[10px] text-gray-400">Click to upload photo</p>
          </div>
        </div>

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
            Continue 3/3 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
