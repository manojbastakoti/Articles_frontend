// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Common from './components/Common';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

 function App() {
  return (
<div className="mainwrapper bg-[#F0EEED] h-screen w-screen dark:bg-[#0F172A]">
<main className='max-w-screen-md mx-auto py-4'>
<Routes>
<Route path='/' element={<Common/>}>

<Route index element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
</Route>
</Routes>
</main>
</div>
  )
}

export default App;