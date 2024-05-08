const DeleteEmp = ({ notShow, id }) => {
  console.log(id);
  async function deleteData() {
    let data = fetch(`http://localhost:3000/empData/${id}`, {
      method: "DELETE",
    });
    alert("Post deleted");
  }

  return (
    <div>
      <div className="bg-white w-64 h-36 sm:w-96 sm:h-48  shadow-xl sm:p-8 p-3 space-y-2 sm:space-y-4">
        <div className="text-xl font-bold text-left">Delete Employee</div>
        <div>Are you sure you want to delete this Employee ?</div>

        <div className="flex justify-end sm:mt-10 space-x-4">
          <button onClick={notShow}>Cancel</button>
          <button onClick={deleteData}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEmp;
