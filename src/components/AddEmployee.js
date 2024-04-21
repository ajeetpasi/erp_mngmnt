import React from "react";
import { Outlet, Link } from "react-router-dom";

const AddEmployee = ({ handleCloseModal }) => {
  return (
    <div className="bg-white w-72 h-80 sm:w-96 sm:h-96 shadow-xl flex justify-center ">
      <div className=" ml-6 sm:ml-3 ">
        <div className="space-y-2 sm:space-y-4 mt-3">
          <div className="text-xl font-bold text-left">Add Employee</div>

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
              className="bg-blue-950 w-52 h-9 sm:w-80 sm:h-10 rounded-lg text-white mt-1"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div onClick={handleCloseModal}>
        <span className="ml-6 sm:ml-0  mt-2 cursor-pointer ">X</span>
      </div>
    </div>
  );
};

export default AddEmployee;
