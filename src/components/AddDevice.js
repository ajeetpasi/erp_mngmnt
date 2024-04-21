import React from "react";
import { Outlet, Link } from "react-router-dom";

const AddDevice = ({ handleCloseModal }) => {
  return (
    <div className="bg-white w-72 h-[430px] sm:w-96 sm:h-[550px] flex justify-center shadow-xl overflow-y-auto ">
      <div className="h-[400px] overflow-x-hidden sm:h-[530px]">
        <div className=" ml-7 flex justify-between ">
          <div className="   mt-3">
            <div className="text-xl font-bold text-left">Add Device</div>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex flex-col ">
                <label className="text-start">Name</label>
                <input
                  required
                  placeholder="Name"
                  type="text"
                  className="border border-black w-60 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-start"> Category</label>
                <input
                  required
                  placeholder="Category"
                  type="text"
                  className="border border-black w-60 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-start"> Vendor Name</label>
                <input
                  required
                  placeholder=" Vendor Name"
                  type="text"
                  className="border border-black w-60 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-start"> Purchased date</label>
                <input
                  required
                  placeholder="Purchased date"
                  type="date"
                  className="border border-black w-60 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-start"> Warranty start date</label>
                <input
                  required
                  placeholder="Warranty start date"
                  type="date"
                  className="border border-black w-60 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
                />
              </div>

              {/* cdscdsc */}
              <div className="flex justify-between ">
                <div>
                  {" "}
                  <label className="text-start sm:text-sm text-xs">
                    {" "}
                    Warranty Year{" "}
                  </label>
                  <input
                    required
                    placeholder="Year"
                    type="text"
                    className="border border-black w-24 h-6 sm:w-36 sm:h-10 rounded-sm p-4 "
                  />
                </div>
                <div className="">
                  {" "}
                  <label className="text-start sm:text-sm text-xs">
                    {" "}
                    Warranty Month
                  </label>
                  <input
                    required
                    placeholder="Month"
                    type="text"
                    className="border border-black w-24 h-6 sm:w-36 sm:h-10 rounded-sm p-4 flex justify-end"
                  />
                </div>
              </div>

              {/* upload image */}
              <div className="flex sm:w-80 space-x-4">
                <div className="border-dashed border-2 border-black rounded-md opacity-30">
                  {" "}
                  <input
                    required
                    placeholder="Upload Device"
                    type="text"
                    className="  w-20  sm:w-28 sm:h-24  p-4 "
                  />
                </div>
                <div className="border-dashed border-2 border-black rounded-md opacity-30 ">
                  {" "}
                  <input
                    required
                    placeholder="Upload Bill"
                    type="img"
                    className="  w-20  sm:w-28 sm:h-24  p-4"
                  />
                </div>
              </div>

              {/* end upload image */}

              <div className="font-bold opacity-25">Auto Generate Name</div>
              <div className="text-start ">
                <button
                  type="submit"
                  className="bg-blue-950 w-60 h-6 sm:w-80 sm:h-10 rounded-lg text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div onClick={handleCloseModal}>
            <span className="flex justify-end mr-4 mt-2 cursor-pointer">X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
