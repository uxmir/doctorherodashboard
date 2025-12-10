"use client"
import React, { createContext, useContext, useState } from 'react'
const SubModuleContext=createContext()
const SidebarProvider = ({children}) => {
const [isSidebarOpen,setIsSidebarOpen]=useState(true)
const [isResponsiveSideBar,setIsResponsiveSideBar]=useState(false)    
  return (
    <SubModuleContext.Provider value={{isSidebarOpen,setIsSidebarOpen,isResponsiveSideBar,setIsResponsiveSideBar}}>
      {children}
    </SubModuleContext.Provider>
  )
}
export default SidebarProvider
export const useSideBarLayout=()=>useContext(SubModuleContext)
