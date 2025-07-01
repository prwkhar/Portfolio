import React from 'react'

function Pdfviewer() {
  return (
    <div className="flex flex-col items-center w-[95%] md:w-[70%] m-4 justify-center h-[500px] md:h-[80vh] bg-transparent text-white">
        <iframe
            src="https://drive.google.com/file/d/1CPdJyXf_XQFDRRjggdq1CCbmDrANAuWl/preview"
            width="100%"
            height="100%"
            className='rounded-2xl shadow-lg shadow-teal-500/10'
        ></iframe></div>
  )
}

export default Pdfviewer
