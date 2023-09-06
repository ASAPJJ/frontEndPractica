import React from 'react'
import MainPanel from '../ui/MainPanel'
import Navbar from '../ui/Navbar'
import Sidebar from '../ui/Sidebar'
import SecondaryPanel from '../ui/SecondaryPanel'

export default function Principal() {
  return (
    <div>
        <Navbar/>
        <MainPanel/>
        <Sidebar/>
        <SecondaryPanel/>

    </div>
  )
}
