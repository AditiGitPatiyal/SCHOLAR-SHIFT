import './JobCreator.css'
// import { useState } from 'react';

import {Link, Outlet} from 'react-router-dom'
const JobCreator=()=>{
  

    return(
        <>
          <div className='container'>
            <div className='box-creator mt-3'>
                {/* <h1 className='fw-500' style={{color:'#f0602d'}}>Welcome! {user.name}</h1> */}
                <Link to='./create-job' className='link text-light px-3 py-2 rounded me-2'>Create Job</Link>
                <Link to='./all-jobs' className='link text-light px-3 py-2 rounded'>All Jobs</Link> 
            </div>
            <div>
              
                <Outlet />
            
            </div>
          </div>
        </>    
    )
 }
 export default JobCreator