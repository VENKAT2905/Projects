import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { auth } from './firebase'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'



const App = () => {

  const navigate=useNavigate();


    useEffect(() => {
    onAuthStateChanged(auth, async (user) =>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }else{
        console.log("Logged Out");
        navigate('/login');
      }
    })
          }, [])


  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id'element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
