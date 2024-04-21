import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const EditPopUp = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;
  return (
    <div className="bg-white w-36 h-24 flex items-center flex-col justify-center space-y-1">
      <span className="close" onClick={toggleModal}>
        &times;
      </span>
      <div className="bg-green-100 w-28 flex items-center gap-1 ">
        <FaRegEdit />
        <h1 className="">Edit</h1>
      </div>
      <div className="bg-red-100 w-28 flex items-center gap-1 text-red-600">
        <MdOutlineDelete />
        <h1 className="">Delete</h1>
      </div>
    </div>
  );
};

export default EditPopUp;
