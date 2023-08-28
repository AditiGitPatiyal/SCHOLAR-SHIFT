import './Allcatjobs.css'
import React,{useState,useEffect,useContext} from 'react'
import UserContext from '../userContext';


const Allcatjobs=()=>{
    const [alljobs,setAlljobs]=useState([]);
    const { user } = useContext(UserContext);
    console.log('User of all jobs',user)
    
    const token='118|ttDElQiSCSeeBuGkRVO7eDqTRx88Brww0mQtKCJu';

    let getJobs = async() =>{
        let response = await fetch('http://scholarshiftapi.divasdoor.com/api/getAllJob',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 
                `Bearer ${token}`  
        }});
        let result = await response.json()
        console.log(result);  
        setAlljobs(result.data);    
    }
    useEffect(()=>{
        getJobs();
    },[]);
    const Applyjob= async(job_id)=>{
        const data={
            'job_id':job_id,
            'applicant':user.id
        }
        console.log(data);
        try {
            const response = await fetch('http://scholarshiftapi.divasdoor.com/api/jobapplication', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 
                    `Bearer ${token}`  
              },
              body: JSON.stringify(data)
            }); 
            if (response.ok) {
                const responseData = await response.json()
                console.log(responseData);
                alert(responseData.message);
            }              
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return(
        <>
           <div class='alljobs mt-2'>
           <h1 className='text-center' style={{color:'#f0602d'}}>ALL JOBS</h1>
             <div className='row'>
                {
                    alljobs.map((job,idx)=>
                    <div className='col-lg-4 col-sm-6 col-xs-12' key={idx}>
                        <div className='card p-3 mt-3'>
                            <p>{job.id}.</p>
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
                            <button className='mt-3' style={{backgroundColor:'#f0602d'}} onClick={()=>Applyjob(job.id)}>Apply Job</button>
                        </div>   
                    </div>
                    )
                }
             </div>
                
           </div>
        </>
    );
}
export default Allcatjobs