import React from 'react'
import DataProcessingForm from './DataProcessingForm'

const DataProcessing = () => {
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
           Trigger Data Processing Tasks
          </h1>
        </div>
      </div>
      <DataProcessingForm />
    </>
  )
}

export default DataProcessing