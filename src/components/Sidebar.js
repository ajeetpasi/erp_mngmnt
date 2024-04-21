import { RxDashboard } from "react-icons/rx";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { MdDevices } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white h-screen    py-3 sm:min-w-48   text-black ">
        <ul className="space-y-6 mt-10">
          <li className="flex justify-start  m-4 gap-2 items-center text-lg">
            <div>
              <RxDashboard />
            </div>
            <h1 className="hidden sm:block font-serif ">Dashboard</h1>
          </li>
          <li className="flex justify-start  m-4 gap-2 items-center text-lg">
            <div>
              <MdOutlineMeetingRoom />
            </div>
            <h1 className="hidden sm:block font-serif "> Meeting Rooms</h1>
          </li>
          <Link to="/employee">
            <li className="flex justify-start  m-4 gap-2 items-center text-lg">
              <div>
                <AiOutlineTeam />
              </div>

              <h1 className="hidden sm:block font-serif ">Employee</h1>
            </li>
          </Link>
          <Link to="/device">
            <li className="flex justify-start  m-4 gap-2 items-center text-lg">
              {" "}
              <div>
                <MdDevices />
              </div>
              <h1 className="hidden sm:block font-serif ">Device</h1>
            </li>
          </Link>
          <li className="flex justify-start m-4 gap-2 items-center text-lg">
            <div>
              <IoRocketOutline />
            </div>
            <h1 className="hidden sm:block font-serif "> Project</h1>
          </li>
          <li className="flex justify-start  m-4 gap-2 items-center text-lg">
            <div>
              <IoSettingsOutline />
            </div>
            <h1 className="hidden sm:block font-serif "> Setting</h1>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
