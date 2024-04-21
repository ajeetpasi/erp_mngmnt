import React from "react";
import { Outlet, Link } from "react-router-dom";

const EditEmployee = ({ onClick }) => {
  return (
    <div>
      <div className="bg-white w-64 h-72 sm:w-96 sm:h-96 flex justify-center shadow-xl">
        <div className="  flex justify-between ">
          <div className="space-y-2 sm:space-y-4 mt-3">
            <div className="text-xl font-bold text-left">Edit Employee</div>

            <div className="flex flex-col ">
              <label className="text-start">Name</label>
              <input
                required
                placeholder="Name"
                type="text"
                className="border border-black w-52 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-start">Email</label>
              <input
                required
                placeholder="Email"
                type="text"
                className="border border-black w-52 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-start">Job Role</label>
              <input
                required
                placeholder="Job Role"
                type="text"
                className="border border-black w-52 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
              />
            </div>
            <div className="text-start">
              <button
                type="submit"
                className="bg-blue-950 w-52 h-8 sm:w-80 sm:h-10 rounded-lg text-white"
              >
                Save
              </button>
            </div>
          </div>
          <div onClick={onClick}>
            <span className="flex  mt-2 cursor-pointer">X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
