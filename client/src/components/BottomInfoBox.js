import React from 'react'

export const BottomInfoBox = (props) => {
  return (
    <div className="fixed  left-0 right-0 flex items-center justify-center py-2 mx-auto text-sm rounded-md shadow-md w-max bottom-5 bg-blue-900 text-white opacity-95">
        <div className="mx-2 font-semibold">{props.title}</div>
    </div>
  )
}
