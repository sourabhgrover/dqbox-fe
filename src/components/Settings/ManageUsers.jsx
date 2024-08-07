import React, { useState } from 'react'

import ExampleTable from './ExampleTable'
import StaticTable from './StaticTable'
import ManageUsersTable from './ManageUsersTable'
import CustomModal from '../common/CustomModal'
import ManageUsersForm from './ManageUsersForm'

const ManageUsers = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Manage Users
        </h1>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          onClick={handleOpen}
          className="primary-btn"
        >
          Add User
        </button>
      </div>
    </div>
  <ManageUsersTable  />
  <CustomModal open={open} onClose={handleClose}>
    <ManageUsersForm />
  </CustomModal>
  </>
  )
}

export default ManageUsers

