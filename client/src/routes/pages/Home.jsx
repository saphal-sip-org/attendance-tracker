import React, { useState } from 'react'
import Sidebar from '../../components/navbar/Sidebar';
import Dashboard from '../../components/navbar/Dashboard';

function Home() {
  const [sidebarToogle, setSidebarToogle] = useState(false)
  return (
    <div className='flex'>
      <Sidebar sidebarToogle= {sidebarToogle} />
      <Dashboard  
        sidebarToogle = {sidebarToogle}
        setSidebarToogle={setSidebarToogle}/>
    </div>
  )
}

export default Home;
