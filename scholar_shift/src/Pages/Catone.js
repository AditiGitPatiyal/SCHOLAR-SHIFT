import {useState,useEffect} from 'react'
const CatOne=()=>{
    const [jobs,setjobs]=useState([]);
    

    let getJobs = async() =>{
        let response = await fetch('http://scholarshiftapi.divasdoor.com/api/jobsbycategory?id=1');
        let result = await response.json()
        console.log(result);  
        setjobs(result.data);    
    }
    useEffect(()=>{
        getJobs();
    },[]);
    return(
        <>
        <div class='alljobs mt-2'>
           <h1 className='text-center' style={{color:'#f0602d'}}>CATEGORY ONE JOBS</h1>
             <div className='row'>
                {
                    jobs.map((job,idx)=>
                    <div className='col-lg-4 col-sm-6 col-xs-12' key={idx}>
                        <div className='card p-3 mt-3'>
                            {/* <p>{job.id}.</p> */}
                            <h2>{job.job_name}</h2>
                            <p>{job.job_description}</p>
                            {/* <p><strong>Category Id: </strong>{job.job_category_id}</p> */}
                            <p><strong>Status:</strong>{
                             job.is_active ? <span>Open</span>:<span>Close</span>
                            }
                            </p>
                            <div className='d-flex justify-content-between'>
                                <div><strong>AMOUNT: </strong>{job.job_amount}</div>
                                <div><strong>job_payment_cycle: </strong>{job.job_payment_cycle}</div>
                            </div>
                            <button className='mt-3' style={{backgroundColor:'#f0602d'}} >Apply Job</button>
                        </div>   
                    </div>
                    )
                }
             </div>
                
           </div>
        </>
        
    );
}
export default CatOne