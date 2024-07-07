import React from 'react';
import { Route,Routes,createRoutesFromElements,createBrowserRouter } from 'react-router-dom';
import TopBar from './screens/TopBar';
import Sidebar from './screens/Sidebar';
import  Dashboard  from './screens/Dashboard';
const AppLayout = () => {
  return (
    <div class="app">
      <Sidebar/>
      <main>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          </Routes>
      </main>
    </div>
  );
}

export default AppLayout;
