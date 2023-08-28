// import './AplliedJobs.css'
import {useState,useEffect} from 'react'

const AppliedJobs=()=>{
    const[Job,setJob]=useState([]);
    const token='118|ttDElQiSCSeeBuGkRVO7eDqTRx88Brww0mQtKCJu';

    let getJobs = async() =>{
        let response = await fetch('http://scholarshiftapi.divasdoor.com/api/jobseekers',{
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': 
                `Bearer ${token}`  
        }});
        let result = await response.json()
        console.log(result);  
        setJob(result.data);    
    }
    useEffect(()=>{
        getJobs();
    },[]);
    return(
        <>
           <div className='container'>
            <h1 className='text-center' style={{color:'#f0602d'}}>APPLIED JOBS</h1>
            <div className='row'>
                {
                Job.map((job,idx)=>{
                    return(
                    <div className='col-lg-4' key={idx}>
                        <div className=' card mt-3 p-2'>
                            <p>Job ID: {job.job.id}</p>
                            <h5>{job.job.job_name}</h5>
                            <p>{job.job.job_description}</p>
                            <p><strong>Category Id: </strong>{job.job.job_category_id}</p>
                            <p><strong>Status:</strong>{
                             job.job.is_active ? <span>Open</span>:<span>Close</span>
                             }
                            </p>
                            <div className='d-flex justify-content-between'>
                                <p><strong>Amount:</strong>{job.job.job_amount}</p>
                                <p><strong>Job Payment Cycle:</strong>{job.job.job_payment_cycle}</p>
                            </div>
                        </div>
                    </div>
                    )
                })
                }
            </div>
           </div>
        </>
    );
}
export default AppliedJobs