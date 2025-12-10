"use client"
import { IconX } from '@tabler/icons-react'
import React from 'react'
import Styles from '../Modal/Modal.module.css'
const Modal = ({children,close}) => {
  return (
    <div>
       <div className="fixed top-0 left-0 z-[9999] bg-black/60 w-full h-full flex justify-center items-center">
      <div className={`mx-auto px-6 py-6 bg-white rounded-2xl relative ${Styles.modal}`}>
      {children}
      <IconX onClick={close} className='absolute top-5 right-5'/>
      </div>
      </div>
    </div>
  )
}

export default Modal
