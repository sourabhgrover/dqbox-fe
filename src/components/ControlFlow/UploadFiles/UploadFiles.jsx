import React, { useState } from 'react'

import CustomModal from '../../common/CustomModal'
import UploadForm from './UploadForm'
import UploadFilesTable from './UploadFilesTable'
import { toast } from 'react-toastify'

const UploadFiles = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const notify = () => toast.success("Wow so easy!");

  return (
    <>
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Manage Upload Files
        </h1>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          onClick={handleOpen}
          // onClick={notify}
          className="primary-btn"
        >
          Upload Files
        </button>
      </div>
    </div>
  <UploadFilesTable />
  <CustomModal open={open} onClose={handleClose}>
    <UploadForm handleClose={handleClose} />
  </CustomModal>
  </>
  )
}

export default UploadFiles

