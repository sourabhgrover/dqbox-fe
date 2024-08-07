import { useState } from "react";
import ManageDqKPITable from "./ManageDqKPITable";
import CustomModal from "../common/CustomModal";
import DqKPIForm from "./DqKPIForm";

const DqKPI = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Manage DQ KPIs
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" onClick={handleOpen} className="primary-btn">
            Add DQ KPIs
          </button>
        </div>
      </div>
      <ManageDqKPITable handleOpen={handleOpen} />
      <CustomModal open={open} onClose={handleClose}>
        <DqKPIForm />
      </CustomModal>
    </>
  );
};

export default DqKPI;
