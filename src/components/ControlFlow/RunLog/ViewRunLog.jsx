import React from "react";
import LogsTable from "./LogsTable";
import CustomDatePicker from "../../common/CustomDatePicker";

const ViewRunLog = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            View Run Log
          </h1>
        </div>
      </div>
      <div className="sm:flex items-center mt-4 gap-4">
        <div className="">
          Reporting Reference Date:
        </div>
        <CustomDatePicker />
        <button
          type="button"
          onClick={() => {}}
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          View Log
        </button>
      </div>
      <LogsTable />
    </div>
  );
};

export default ViewRunLog;
