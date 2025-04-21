import React from "react";

type ResetPopupProps = {
  onClose: () => void;
  onReset: () => void;
};

const ResetPopup = ({ onReset, onClose }: ResetPopupProps) => {
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl grid grid-rows-[1fr_1.5fr] p-4 gap-10">
          <div className=" text-4xl text-center font-semibold px-8 pt-4">
            Confirm Reset?
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={onReset} className="bg-red-400 rounded-xl text-2xl">Reset</button>
            <button onClick={onClose} className="bg-gray-400 rounded-xl text-2xl">Cancel</button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-md z-40"></div>
    </>
  );
};

export default ResetPopup;
