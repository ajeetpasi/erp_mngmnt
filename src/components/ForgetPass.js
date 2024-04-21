import { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPass = ({ handleForgetPassClick }) => {
  const [step, setStep] = useState(1);

  function handleSendClick() {
    setStep(2); // Move to OTP verification step
  }
  function handleSubmit() {
    setStep(3); // Move to OTP verification step
  }
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-slate-400">
        {/* Forget Password dialog */}
        {step === 1 && (
          <div className="bg-white w-96 h-80 flex justify-center shadow-xl">
            <div className=" ml-7 flex justify-between">
              <div className=" space-y-4 mt-4">
                <div className="text-xl font-bold text-left">
                  Forget Password
                </div>
                <p className="text-start">
                  Enter email address & we’ll send you a link to reset your
                  password.
                </p>

                <div className="flex flex-col ">
                  <label className="text-start">Email*</label>
                  <input
                    required
                    placeholder="Email"
                    type="text"
                    className="border border-black w-80 h-10 rounded-sm p-4"
                  />
                </div>
                <div className="text-start">
                  <button
                    onClick={handleSendClick}
                    type="submit"
                    className="bg-blue-950 w-80 h-10 rounded-lg text-white"
                  >
                    Send
                  </button>
                </div>

                <div>
                  <Link to="/">
                    <h1 className="text-start">Back to LOG IN</h1>
                  </Link>
                </div>
              </div>
              <div onClick={handleForgetPassClick}>
                <Link to="/">
                  <span className="flex justify-end mr-4 mt-2 cursor-pointer">
                    X
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* otp verification part */}

        {step === 2 && (
          <div className="bg-white w-96 h-80 flex justify-center shadow-xl">
            <div className=" ml-7 flex justify-between">
              <div className=" space-y-4 mt-4">
                <div className="text-xl font-bold text-left">
                  Otp Verification{" "}
                </div>
                <div>
                  <p className="text-start">Enter the OTP sent to -</p>
                  <p className="text-start">sagar@shantiinfosoft@gmail.com</p>
                </div>
                <div className="flex flex-row justify-between ">
                  <input
                    type="text"
                    className=" w-14 h-14 rounded-2xl p-4 shadow-lg bg-slate-200"
                  />
                  <input
                    type="text"
                    className=" w-14 h-14 rounded-2xl p-4 shadow-lg bg-slate-200"
                  />
                  <input
                    type="text"
                    className=" w-14 h-14 rounded-2xl p-4 shadow-lg bg-slate-200"
                  />
                  <input
                    type="text"
                    className=" w-14 h-14 rounded-2xl p-4 shadow-lg bg-slate-200"
                  />
                </div>
                <div className="flex">
                  <p className="font-thin">Don’t receive code ?</p>
                  <p className="font-bold">Re-send</p>
                </div>
                <div className="text-start">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-blue-950 w-80 h-10 rounded-lg text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div onClick={handleForgetPassClick}>
                <Link to="/">
                  <span className="flex justify-end mr-4 mt-2 cursor-pointer">
                    X
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Change password dialog */}

        {step === 3 && (
          <div className="bg-white w-96 h-96 flex justify-center shadow-xl">
            <div className=" ml-7 flex justify-between">
              <div className=" space-y-4 mt-4">
                <div className="text-xl font-bold text-left">
                  Change Password
                </div>
                <p className="text-start">
                  Must include at least one symbol or number and have at least 8
                  characters.
                </p>
                <div className="flex flex-col ">
                  <label className="text-start">New Password *</label>
                  <input
                    placeholder="Email"
                    type="text"
                    className="border border-black w-80 h-10 rounded-sm p-4"
                  />
                </div>
                <div>
                  <label className="text-start">Confirm Password *</label>
                  <input
                    placeholder="Email"
                    type="text"
                    className="border border-black w-80 h-10 rounded-sm p-4"
                  />
                </div>
                <div className="text-start">
                  <button
                    type="submit"
                    className="bg-blue-950 w-80 h-10 rounded-lg text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
              <div onClick={handleForgetPassClick}>
                <Link to="/">
                  <span className="flex justify-end mr-4 mt-2 cursor-pointer">
                    X
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ForgetPass;
