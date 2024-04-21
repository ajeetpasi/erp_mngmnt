import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import AddEmployee from "./AddEmployee";
import { FaRegEdit } from "react-icons/fa";
import Box from "@mui/material/Box";

import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { MdOutlineDelete } from "react-icons/md";
import DeleteEmp from "./DeleteEmp";
import EditEmployee from "./EditEmployee";
import Modal from "@mui/material/Modal";
import logo from "../Assets/logo.png";
import phone from "../Assets/phone.jpg";

// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditPopUp from "./EditePopUP";
import AddDevice from "./AddDevice";
const deviceData = [
  {
    deviceImage: logo,
    deviceName: "DESKTOP-PI4FRB1",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceImage: phone,
    deviceName: "Iphone - 12",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceImage: phone,
    deviceName: "Vivo T1 ",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceImage: phone,
    deviceName: "Asus-Tuf Gaming",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceImage: phone,
    deviceName: "DESKTOP-PI4FRB1",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceImage: phone,
    deviceName: "DESKTOP-PI4FRB1",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceImage: phone,
    deviceName: "DESKTOP-PI4FRB1",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceImage: phone,
    deviceName: "Iphone - 12",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceImage: phone,
    deviceName: "Iphone - 12",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceImage: phone,
    deviceName: "Iphone - 12",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
  {
    deviceName: "Iphone - 12",
    category: "Desktop",
    status: "Assign",
    purchaseDate: " 17 , Sep 2023",
    warrenty: "2 Year",
  },
];

const Device = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleEditClose = () => setOpenModal(false);

  const [showModal1, setShowModal1] = useState(false);
  const handleOpenModal1 = () => {
    setShowModal1(true);
  };
  const handleCloseModal1 = () => {
    setShowModal1(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 0,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showEditEmp, setShowEditEmp] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = deviceData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(deviceData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCpage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  const [showAddEmp, setShowEmp] = useState(false);

  const hanldeClick = () => {
    setShowEmp(true);
  };

  const handleCloseModal = () => {
    setShowEmp(false);
  };

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className=" h-screen w-full bg-white  ">
        <div className=" sm:w-full w-auto  ">
          <div className="flex  sm:justify-between sm:flex-row flex-col items-center space-y-1">
            <div className="mt-3 ml-3">
              <h1 className="text-blue-950 text-sm sm:text-2xl font-bold">
                Device
              </h1>
              <h1 className=" font-thin">{deviceData.length} Device</h1>
            </div>

            <div className="flex items-center flex-col sm:flex-row gap-5 sm:mr-4 sm:mt-5">
              <div>
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  className=" rounded-lg relative bg-yellow-100 px-4 py-2"
                />
                {/* <CiSearch className="absolute right-56 top-28" /> */}
              </div>
              <div>
                <button
                  className="px-4 flex items-center bg-red-600 py-2 rounded-lg text-white gap-2"
                  onClick={hanldeClick}
                >
                  <AiOutlineFileAdd /> Add Device
                </button>
              </div>
            </div>
          </div>
          <div className="m-4 overflow-x-auto ">
            <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400 h-16 ">
                <tr className="w-full">
                  <th scope="col" className="px-6 py-3">
                    Device Name
                  </th>
                  <th className="px-6 py-3">Category</th>

                  <th className="px-6 py-3">Status</th>

                  <th className="px-6 py-3">Purchased date</th>
                  <th className="px-6 py-3">Warranty</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>

              <tbody className="">
                {records.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b-2 text-black text-sm h-20"
                  >
                    <td className="sm:px-4 sm:py-4 px-10 py-4 max-h-20 flex items-center space-x-1">
                      <img
                        src={item.deviceImage}
                        className="h-10 w-10 border border-1 border-black"
                      />
                      <h1>{item.deviceName}</h1>
                    </td>
                    <td className="sm:px-4 sm:py-2 px-6 py-4">
                      {item.category}
                    </td>
                    <td className="sm:px-4 sm:py-2 px-6 py-4">{item.status}</td>
                    <td className="sm:px-4 sm:py-2 px-6 py-4">
                      {item.purchaseDate}
                    </td>
                    <td className="sm:px-4 sm:py-2 px-6 py-4">
                      {item.warrenty}
                    </td>

                    <td className="">
                      <div>
                        <Button
                          id="basic-button"
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <h1 className="text-2xl text-black font-bold">
                            {" "}
                            ...
                          </h1>
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleOpen}>Assign</MenuItem>
                          <MenuItem onClick={handleOpenModal1}>Edit</MenuItem>

                          <MenuItem onClick={handleOpenModal1}>Delete</MenuItem>
                          <MenuItem onClick={handleOpenModal1}>
                            Download Bill
                          </MenuItem>
                        </Menu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav className="flex justify-center mt-4">
            <ul className=" flex gap-3">
              <li>
                <a href="#" className="" onClick={prePage}>
                  Prev
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changeCpage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}

              <li>
                <a href="#" className="page-item" onClick={() => nextPage()}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Add employee section */}

      <div>
        {showAddEmp && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <AddDevice handleCloseModal={handleCloseModal} />
          </div>
        )}
      </div>

      {/* Edit Employee sectoin */}

      <Modal
        open={openModal}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditEmployee onClick={handleEditClose} />
        </Box>
      </Modal>

      {/* Delete Employee section */}

      <Modal
        open={showModal1}
        onClose={handleCloseModal1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DeleteEmp notShow={handleCloseModal1} />
      </Modal>
      {/* <div>
        {showDeleteEmp && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <DeleteEmp onClose={() => setDeleteEmp(false)} />
          </div>
        )}
      </div> */}

      <div>
        {showEditEmp && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <EditEmployee onClose={() => setShowEditEmp(false)} />
          </div>
        )}
      </div>
    </>
  );
};

export default Device;
