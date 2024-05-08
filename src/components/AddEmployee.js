import React, { useState } from "react";

const AddEmployee = ({ handleCloseModal }) => {
  const [empName, setEmpName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [email, setEmail] = useState("");

  const postData = async () => {
    console.log("name", empName);
    let obj = {
      empName,
      jobRole,
      email,
      status: 0,
    };
    let data = await fetch("http://localhost:3000/empData", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    postData();
    setEmpName("");
    setJobRole("");
    setEmail("");
  }

  return (
    <div className="bg-white w-72 h-80 sm:w-96 sm:h-96 shadow-xl flex justify-center ">
      <div className=" ml-6 sm:ml-3 ">
        <from onSubmit={handleSubmit}>
          <div className="space-y-2 sm:space-y-4 mt-3">
            <div className="text-xl font-bold text-left">Add Employee</div>

            <div className="flex flex-col ">
              <label className="text-start">Name</label>
              <input
                onChange={(e) => setEmpName(e.target.value)}
                value={empName}
                required
                placeholder="Name"
                type="text"
                className="border border-black w-52 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-start">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="Email"
                type="text"
                className="border border-black w-52 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-start">Job Role</label>
              <input
                onChange={(e) => setJobRole(e.target.value)}
                value={jobRole}
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
                onClick={handleSubmit}
              >
                {/* <input type="submit" /> */}
                Save
              </button>
            </div>
          </div>
        </from>
      </div>
      <div onClick={handleCloseModal}>
        <span className="ml-6 sm:ml-0  mt-2 cursor-pointer ">X</span>
      </div>
    </div>
  );
};

export default AddEmployee;
