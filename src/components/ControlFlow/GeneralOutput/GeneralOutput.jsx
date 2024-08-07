import React from 'react'
import GeneralOutputForm from './GeneralOutputForm'

const GeneralOutput = () => {
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
           General Output
          </h1>
        </div>
      </div>
      <GeneralOutputForm />
    </>
  )
}

export default GeneralOutput