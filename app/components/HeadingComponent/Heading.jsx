import React from 'react'

const Heading = ({children}) => {
  return (
    <div>
       <h3 className='text-2xl capitalize font-medium text-[#28629C] pb-3'>{children}</h3>
    </div>
  )
}

export default Heading
