import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import FormSubmission from '../components/Form';
import NotFound from '../components/NotFound';
import Signin from '../components/Signin/Signin';
function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/form' element={<FormSubmission/>}/>
            <Route path='/*' element={<NotFound/>}/>
            <Route path='/signin' element={<Signin/>} />
        </Routes>
    )
}

export default AllRoutes;