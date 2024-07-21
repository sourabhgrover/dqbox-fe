import React, { useState } from 'react'

import CustomModal from '../../common/CustomModal'
import RulesForm from './RulesForm'
import DefaultingRulesTable from './DefaultingRulesTable'

const ManageDefaultingRules = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Manage Defaulting Rules
        </h1>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          onClick={handleOpen}
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Defaulting Rule
        </button>
      </div>
    </div>
  <DefaultingRulesTable />
  <CustomModal open={open} onClose={handleClose}>
    <RulesForm />
  </CustomModal>
  </div>
  )
}

export default ManageDefaultingRules

