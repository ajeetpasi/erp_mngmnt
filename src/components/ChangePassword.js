const ChangePassword = () => {
  return (
    <div>
      <div className="bg-white w-96 h-96 flex justify-center shadow-xl">
        <div className=" ml-7 flex justify-between">
          <div className=" space-y-4 mt-4">
            <div className="text-xl font-bold text-left">Change Password</div>

            <div>
              Must include at least one symbol or number and have at least 8
              characters.
            </div>
            <div className="flex flex-col ">
              <label className="text-start">Old Passwod *</label>
              <input
                required
                placeholder="Name"
                type="text"
                className="border border-black w-80 h-10 rounded-sm p-4"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-start"> New Password *</label>
              <input
                required
                placeholder="Email"
                type="text"
                className="border border-black w-80 h-10 rounded-sm p-4"
              />
            </div>

            <div className="text-start">
              <button
                type="submit"
                className="bg-blue-950 w-80 h-10 rounded-lg text-white"
              >
                Save
              </button>
            </div>
          </div>
          <div>
            <span className="flex justify-end mr-4 mt-2 cursor-pointer">X</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
