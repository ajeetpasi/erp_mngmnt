import styles from "./Employee.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import { Link } from 'react-router-dom';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Sidebar from "./Sidebar";
import Navigationn from "./Navigationn";
import * as React from "react";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Button from "@mui/material/Button";
// import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles2 from "./AddEmployee.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import stylesDelete from "./DeleteEmployee.module.css";
import { Password } from "@mui/icons-material";
import stylesCP from "./ChangePassword.module.css";
// For change Password Modal->
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { colors } from "@mui/material";

import AddEmployee from "./AddEmployee";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Employee = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openChangePassword, setOpenChangePassword] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleEditClose = () => setOpenModal(false);

  const handleDelete = () => setOpenDelete(true);
  const handleDeleteClose = () => setOpenDelete(false);
  const handleChangeClose = () => setOpenChangePassword(false);

  const handleChangeOpen = () => setOpenChangePassword(true);
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

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // For validation in edit Popup --------------->>>>>>>>>>>>>>.

  const [emailError, setEmailError] = useState("");
  function checkEmailValidation(e) {
    const fetchInput = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      (emailRegex.test(fetchInput) && fetchInput.includes("gmail.com")) ||
      fetchInput === ""
    ) {
      setEmailError("");
    } else {
      setEmailError("Please Enter valid email address");
    }
  }
  // For validation in change Password---------------------->>>>>>>>>>>>>>>>>>>>>>.

  const [checkPasswordError, setCheckPasswordError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewError, setCheckNewError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const checkChangeNewPassword = (event) => {
    setNewPassword(event.target.value);
    if (newPassword.includes("@") && newPassword.length >= 8) {
      setCheckNewError("");
    } else {
      setCheckNewError(
        "Password Must include at least one symbol or number and have atleast 8 characters."
      );
    }
  };

  const checkChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    if (newPassword === event.target.value || event.target.value === "") {
      setCheckPasswordError("");
      if (checkNewError === "") {
        setSaveButtonDisabled(true);
      }
      //    navigate('/employee');
    } else {
      setCheckPasswordError("Your Password is not matching the new password");
    }
  };
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  const toggleAddEmployee = () => {
    setIsAddEmployeeOpen((prevState) => !prevState);
  };

  return (
    <>
      <Navigationn />

      <div className="maincontainer">
        <Sidebar />

        <div className={`${styles["containerRight"]}`}>
          <div className={`${styles["upper"]}`}>
            <div className={`${styles["left"]}`}>
              <h2>Employees</h2>
              <p>110 Employee</p>
            </div>

            <div className={`${styles["right"]}`}>
              <div className={`${styles["inside"]}`}>
                <input type="text" placeholder="Search" />
              </div>
              <div className={`${styles["icon"]}`}>
                {" "}
                <SearchIcon />{" "}
              </div>

              <div>
                <div className={`${styles["inside2"]}`}>
                  {" "}
                  <button onClick={toggleAddEmployee}>
                    <PersonAddAltIcon /> Add Employee
                  </button>
                </div>
                {isAddEmployeeOpen && (
                  <AddEmployee
                    open={isAddEmployeeOpen}
                    onClose={toggleAddEmployee}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={`${styles["tablediv"]}`}>
            <table>
              <tr className="tablerow">
                <th>employee</th>
                <th>job role</th>
                <th>email</th>
                <th>Status</th>
                <th></th>
              </tr>
              <tr className={`${styles["tablerow"]}`}>
                <td>alex buckmaster</td>
                <td>UI designer</td>
                <td>alexb.shantiinfosoft@gmail.com</td>
                <td>
                  {" "}
                  <Switch {...label} />
                </td>
                <td>
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreHorizIcon
                        className={`${styles["horizontalDots"]}`}
                      />
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
                      <MenuItem onClick={handleDelete}>Delete</MenuItem>
                      <MenuItem onClick={handleChangeOpen}>
                        Change Password
                      </MenuItem>
                    </Menu>
                  </div>
                </td>
              </tr>
              {/* -------------------------------------2nd row------------------------------------------- */}
              <tr className="tablerow">
                <td>stephanie sharkey</td>
                <td>UX designer</td>
                <td>step.shantiinfosoft@gmail.com</td>
                <td>
                  <Switch {...label} />
                </td>

                <td>
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreHorizIcon
                        className={`${styles["horizontalDots"]}`}
                      />
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
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={handleChangeOpen}>
                        Change Password
                      </MenuItem>
                    </Menu>
                  </div>
                </td>
              </tr>
              {/* --------------------------------------3rd row------------------------------------------- */}
              <tr className="tablerow">
                <td>alex buckmaster</td>
                <td>product manager</td>
                <td>alex.shantiinfosoft@gmail.com</td>
                <td>
                  <Switch {...label} />
                </td>
                <td>
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreHorizIcon
                        className={`${styles["horizontalDots"]}`}
                      />
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
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={handleChangeOpen}>
                        Change Password
                      </MenuItem>
                    </Menu>
                  </div>
                </td>
              </tr>
              {/* ------------------------------------------------4th Row------------------------------------------------------------- */}
              <tr className="tablerow">
                <td>stephanie sharkey</td>
                <td>QA tester</td>
                <td>step.shantiinfosoft@gmail.com</td>
                <td>
                  <Switch {...label} />
                </td>
                <td>
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreHorizIcon
                        className={`${styles["horizontalDots"]}`}
                      />
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
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={handleChangeOpen}>
                        Change Password
                      </MenuItem>
                    </Menu>
                  </div>
                </td>
              </tr>
              {/* ------------------------------------------------5th Row------------------------------------------------------------- */}
              <tr className="tablerow">
                <td>alex buckmaster</td>
                <td>backend developer</td>
                <td>alex.shantiinfosoft@gmail.com</td>
                <td>
                  <Switch {...label} />
                </td>
                <td>
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreHorizIcon
                        className={`${styles["horizontalDots"]}`}
                      />
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
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={handleChangeOpen}>
                        Change Password
                      </MenuItem>
                    </Menu>
                  </div>
                </td>
              </tr>
              {/* ------------------------------------------------6th Row------------------------------------------------------------- */}
              <tr className="tablerow">
                <td>stephanie sharkey</td>
                <td>QA tester</td>
                <td>step.shantiinfosoft@gmail.com</td>
                <td>
                  <Switch {...label} />
                </td>
                <td>
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreHorizIcon
                        className={`${styles["horizontalDots"]}`}
                      />
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
                      <MenuItem onClick={handleDelete}>Delete</MenuItem>
                      <MenuItem onClick={handleChangeOpen}>
                        Change Password
                      </MenuItem>
                    </Menu>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      {/* --------------------------------Modal for Edit-------------------------------------------------------- */}

      <Modal
        open={openModal}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`${styles2["box"]}`}>
            <div className={`${styles2["h2Cross"]}`}>
              <h2>Edit Employee</h2>
              <ClearIcon
                className={`${styles2["cross"]}`}
                onClick={handleEditClose}
              />
            </div>

            <div className={`${styles2["allInput"]}`}>
              <form>
                <div className={`${styles2["inputs"]}`}>
                  <label htmlFor="">Name</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                    required
                  />
                </div>

                <div className={`${styles2["inputs"]}`}>
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    onChange={checkEmailValidation}
                    required
                  />
                  {emailError && (
                    <p className={`${styles2["pEmailError"]}`}>{emailError}</p>
                  )}
                </div>

                <div className={`${styles["inputs"]}`}>
                  <label htmlFor="">Job Role</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Job Role"
                    required
                  />
                </div>
                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>

      {/* -------------------------------------------------Delete Modal------------------------------------------------------ */}

      <Modal
        open={openDelete}
        onClose={handleDeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`${stylesDelete["box"]}`}>
            <h2>Delete Employee</h2>
            <p>Are You sure want to delete this employee ?</p>
            <div className={`${stylesDelete["buttons"]}`}>
              <button
                className={`${stylesDelete["cancel"]}`}
                onClick={handleDeleteClose}
              >
                Cancel
              </button>
              <button onClick={handleDeleteClose}>Delete</button>
            </div>
          </div>
        </Box>
      </Modal>

      {/* ----------------------------Change Password Modal------------------------------------------------- */}

      <Modal
        open={openChangePassword}
        onClose={handleChangeClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`${stylesCP["changePasswordContainer"]}`}>
            <form>
              <div className={`${stylesCP["h2andIcon"]}`}>
                <h2>Change Password</h2>
                <FontAwesomeIcon
                  icon={faXmark}
                  className={`${stylesCP["icon"]}`}
                  onClick={handleChangeClose}
                />
              </div>
              <p className={`${stylesCP["pInfo"]}`}>
                Must include at least one symbol or number and have atleast 8
                characters.
              </p>

              <div className={`${stylesCP["boxInput"]}`}>
                <div className={`${stylesCP["newPassword"]}`}>
                  <label htmlFor="">
                    New Password<sup>*</sup>
                  </label>

                  <div className={`${stylesCP["input1"]}`}>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Enter Password"
                      onChange={checkChangeNewPassword}
                      required
                    />
                    {/* {checkNewError && <p className={`${stylesCP['pchangeError']}`}>{checkNewError}</p>} */}
                    <span>
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEye : faEyeSlash}
                        onClick={togglePasswordVisibility}
                        className={`${stylesCP["eye"]}`}
                      />
                    </span>
                  </div>
                </div>
                <div className={`${stylesCP["confirmPassword"]}`}>
                  <label htmlFor="">
                    Confirm Password<sup>*</sup>
                  </label>
                  <div className={`${stylesCP["input2"]}`}>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Confirm Password"
                      onChange={checkChangeConfirmPassword}
                      required
                    />
                    {checkPasswordError && (
                      <p className={`${stylesCP["pchangeError"]}`}>
                        {checkPasswordError}
                      </p>
                    )}
                    <span>
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEye : faEyeSlash}
                        onClick={togglePasswordVisibility}
                        className={`${stylesCP["eye"]}`}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <button
                className={`${stylesCP["button"]}`}
                type="submit"
                disabled={saveButtonDisabled}
              >
                Save
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Employee;
