import React from 'react'

function Pdfviewer() {
  return (
    <div className="flex flex-col items-center w-full m-4 justify-center h-[800px] bg-transparent text-white">
        <iframe
            src="/cv.pdf"
            width="60%"
            height="400%"
            className='rounded-2xl shadow-lg shadow-teal-500/10'
        ></iframe></div>
  )
}

export default Pdfviewer
