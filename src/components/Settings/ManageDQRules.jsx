import React, { useState } from 'react'
import ManageDqRulesTable from './ManageDqRulesTable'
import CustomModal from '../common/CustomModal'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import DQRuleForm from './DQRuleForm'

const ManageDQRules = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Manage DQ Rules
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={handleOpen}
            className="primary-btn"
          >
            Add DQ Rule
          </button>
        </div>
      </div>
    <ManageDqRulesTable />
    <CustomModal open={open} onClose={handleClose}>
      <DQRuleForm />
    </CustomModal>
    </>
  )
}

export default ManageDQRules