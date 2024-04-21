import logo from "../Assets/logo.png";
import { IoIosHelpCircle } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import userlogo from "../Assets/userlogo.webp";
import { useState } from "react";
import ChangePassword from "./ChangePassword";

import Button from "@mui/material/Button";

// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showPassword, setShowpassword] = useState(false);
  function hanldeShowpassword() {
    setShowpassword(true);
  }
  return (
    <>
      <div className="bg-#031130 flex items-center justify-between sm:h-20  h-12    ">
        <div>
          <img
            src={logo}
            className="w-24 md:w-48 h-6 md:h-14 brightness-0 invert"
          />
        </div>
        <div className="flex gap-2 sm:mr-10 ">
          <div className="flex items-center gap-1 text-white">
            <IoIosHelpCircle
              fontSize="large"
              className=" text-xs sm:text-2xl"
            />
            <div>
              <h1 className="text-white text-xs sm:text-lg"> Help</h1>
            </div>
          </div>
          <div className="   items-center bg-white w-0.5 sm:w-0.5 sm:h-14 sm:mr-1"></div>
          <div className="flex items-center gap-1 ">
            <div className="bg-white rounded-full h-6 w-6 sm:w-12 sm:h-12  ">
              {" "}
              <img src={userlogo} alt="logo" className=" " />
            </div>
            <h1 className="text-white text-xs sm:text-base"> Sagar</h1>
            <div className=" ">
              <button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className=""
              >
                <RiArrowDropDownLine className="text-white" />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>My Details</MenuItem>
                <MenuItem> Change Password</MenuItem>
                <MenuItem> Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showPassword && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <ChangePassword />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
