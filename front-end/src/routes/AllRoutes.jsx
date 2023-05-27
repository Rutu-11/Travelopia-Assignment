import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import FormSubmission from '../components/Form';
function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/form' element={<FormSubmission/>}/>
            {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
    )
}

export default AllRoutes;