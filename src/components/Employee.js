import React, { useEffect, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import AddEmployee from "./AddEmployee";
import { FaRegEdit } from "react-icons/fa";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import DeleteEmp from "./DeleteEmp";
import EditEmployee from "./EditEmployee";
import Modal from "@mui/material/Modal";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const Employee = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/employee")
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
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
    // border: "2px solid #000",
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
  const records = employeeData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(employeeData.length / recordsPerPage);
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

  return (
    <>
      <div className="bg-white h-screen w-full">
        <div className="  sm:w-full w-auto">
          <div className="flex  sm:justify-between sm:flex-row flex-col items-center space-y-1  ">
            <div className="mt-3 ml-3">
              <h1 className="text-blue-950 text-sm sm:text-2xl font-bold">
                Employees
              </h1>
              <h1 className=" font-thin text-sm sm:text-lg">
                {employeeData.length} employees
              </h1>
            </div>

            <div className="flex items-center flex-col sm:flex-row sm:gap-5 gap-2 sm:mr-4 sm:mt-5 ">
              <div>
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  className=" rounded-lg relative bg-yellow-100 sm:px-4 sm:py-2 w-36 sm:w-auto"
                />
                {/* <CiSearch className="absolute right-56 top-28" /> */}
              </div>
              <div>
                <button
                  className="sm:px-4 flex items-center bg-red-600 sm:py-2 rounded-lg text-white sm:gap-2 text-xs sm:text-base h-6 sm:h-auto gap-1 p-2 sm:p-0"
                  onClick={hanldeClick}
                >
                  <AiOutlineFileAdd /> Add Employee
                </button>
              </div>
            </div>
          </div>
          <div className="m-4 overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400 h-16">
                  <tr>
                    <th scope="col" className="sm:px-6 sm:py-3 px-4 py-2">
                      Employee
                    </th>
                    <th className="sm:px-6 sm:py-3 px-4 py-2">Job Role</th>

                    <th className="sm:px-6 sm:py-3 px-4 py-2">Email</th>

                    <th className="sm:px-6 sm:py-3 px-4 py-2">Status</th>
                    <th className="sm:px-6 sm:py-3 px-4 py-2"></th>
                  </tr>
                </thead>

                <tbody className="">
                  {records.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b-2 text-black text-sm h-20"
                    >
                      <td className="sm:px-6 sm:py-4 px-6 py-4">
                        {item.empName}
                      </td>
                      <td className="sm:px-6 sm:py-4 px-6 py-4">
                        {item.jobRole}
                      </td>
                      <td className="sm:px-6 sm:py-4 px-6 py-4">
                        {item.email}
                      </td>
                      <td className="sm:px-6 sm:py-4 px-6 py-4">
                        {item.status === 0 ? "Inactive" : "Active"}
                      </td>
                      <td className="px-6 py-4 sm:px-6 sm:py-4 ">
                        <div>
                          <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            className=""
                          >
                            <h1 className="text-black text-xl font-bold">
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
                            <MenuItem onClick={handleOpen}>Edit</MenuItem>
                            <MenuItem onClick={handleOpenModal1}>
                              Delete
                            </MenuItem>
                          </Menu>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <AddEmployee handleCloseModal={handleCloseModal} />
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

export default Employee;
