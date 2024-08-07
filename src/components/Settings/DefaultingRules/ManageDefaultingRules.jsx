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
          className="primary-btn"
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

