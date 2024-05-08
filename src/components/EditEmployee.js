import React, { useEffect, useState } from "react";

const EditEmployee = ({ onClick, id, name }) => {
  console.log(id);
  console.log(name);

  const [empName, setupdateEmpName] = useState(name);
  const [email, setupdateEmail] = useState("");
  const [jobRole, setupdateJobRole] = useState("");
  // console.log(empName);

  const updataData = async () => {
    let obj = {
      empName,
      email,
      jobRole,
      status: 0,
    };
    let data = await fetch(`http://localhost:3000/empData/${id}`, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    });
  };

  const handlUpdate = (e) => {
    e.preventDefault();
    updataData();
    setupdateEmpName("");
    setupdateEmail("");
    setupdateJobRole("");
    onClick();
  };
  return (
    <div>
      <div className="bg-white w-64 h-72 sm:w-96 sm:h-96 flex justify-center shadow-xl">
        <div className="  flex justify-between ">
          <form onSubmit={handlUpdate}>
            <div className="space-y-2 sm:space-y-4 mt-3">
              <div className="text-xl font-bold text-left">Edit Employee</div>

              <div className="flex flex-col ">
                <label className="text-start">Name</label>
                <input
                  value={empName}
                  required
                  placeholder="Name"
                  type="text"
                  className="border border-black w-52 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
                  onChange={(e) => setupdateEmpName(e.target.value)}
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-start">Email</label>
                <input
                  value={email}
                  onChange={(e) => setupdateEmail(e.target.value)}
                  required
                  placeholder="Email"
                  type="text"
                  className="border border-black w-52 h-6 sm:w-80 sm:h-10 rounded-sm p-4"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-start">Job Role</label>
                <input
                  value={jobRole}
                  onChange={(e) => setupdateJobRole(e.target.value)}
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
                  onClick={handlUpdate}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          <div onClick={onClick}>
            <span className="flex  mt-2 cursor-pointer">X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
