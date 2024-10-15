import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import SingleConnectionContainer from "./SingleConnectionContainer";

import { resetConnectionState } from "../../../store/connections";

const ConnectionList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addConnection = () => {
    dispatch(resetConnectionState());
    navigate("/connection");
  };
  return (
    <div className="flex flex-col sm:flex-row flex-wrap flex-1 gap-2">
      <div
        className={`flex flex-col items-center justify-center gap-3 py-14 border rounded-lg shadow-md  cursor-pointer bg-gray-50`}
        style={{ flexBasis: "calc(33.33% - 8px)" }}
        onClick={addConnection}
      >
        <button className="text-gray-500 hover:text-gray-700">
          <PlusCircleIcon className="h-12 w-12 text-blue-500" />
        </button>
        <p> Add New Connection</p>
      </div>
      <SingleConnectionContainer />
    </div>
  );
};

export default ConnectionList;
