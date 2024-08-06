import { useState } from 'react'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/Homepage'
import Jobs from './pages/Jobs'
import './index.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path='/' element={<MainLayout/>}>
      <Route index element={<Homepage/>} />
      <Route path='/about' element={<Jobs/>}/>
    </Route>)
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
