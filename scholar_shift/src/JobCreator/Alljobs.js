import './Alljobs.css'
import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import JobContext from '../JobContext';






const Alljobs=()=>{
    const [alljobs,setAlljobs]=useState([]);
    const {job,setJob} = useContext(JobContext);
    var navigate= useNavigate();

    
    
    const token='86|0CMwHKCZZ0Qg0b9sXD2EAwIjBLG7ne4tlcV2AHtY';

    let getJobs = async() =>{
        let response = await fetch('http://scholarshiftapi.divasdoor.com/api/getAllJob',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 
                `Bearer ${token}`  
        }});
        let result = await response.json()
        // console.log(result);  
        setAlljobs(result.data);    
    }
    useEffect(()=>{
        getJobs();
    },[]);
    const setValue=(job)=>{
        var link=`/job-creator/update-job`
        setJob(job);
        navigate(link);
    }
    
    return(
        <>
           <div className='alljobs mt-2'>
           <h1 className='text-center' style={{color:'#f0602d'}}>ALL JOBS</h1>
             <div className='row'>
                {
                    alljobs.map((job,idx)=>
                    
                    <div className='col-lg-4 col-sm-6 col-xs-12' key={idx}>
                        <div className='card p-3 my-3'>        
                            <h2>{job.job_name}</h2>
                            <p>{job.job_description}</p>
                            <p><strong>Category Id: </strong>{job.job_category_id}</p>
                            <p><strong>Status:</strong>{
                             job.is_active ? <span>Open</span>:<span>Close</span>
                            }
                            </p>
                            <div className='d-flex justify-content-between'>
                                <div><strong>AMOUNT: </strong>{job.job_amount}</div>
                                <div><strong>job_payment_cycle: </strong>{job.job_payment_cycle}</div>
                            </div>
                            {/* <Link to='job-creator/update-job'> */}
                                <button style={{backgroundColor:'#5939ff'}} onClick={()=>setValue(job)}>Update</button>
                            {/* </Link> */}
                        </div>   
                    </div>
                    )
                }
             </div>
                
           </div>
        </>
    );
}
export default Alljobs