import React from 'react'
import Layout from '../layout/Layout'
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Aboutus from '../pages/Aboutus'


const MyRouters = () => {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/aboutus' element={<Aboutus/>}></Route>

        </Routes>   
    </Layout>
  )
}

export default MyRouters
