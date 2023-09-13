import React from 'react'

const SubHeaders = ({ label, program }) => {
  return (
    <div>
      <div className="bg-yellow-400 py-2 px-4 uppercase">
        {label}
        {program}
      </div>
    </div>
  )
}

export default SubHeaders
