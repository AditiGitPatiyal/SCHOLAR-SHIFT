import {useState} from 'react'

const JobCreate=()=>{

    const[job_name,setName]=useState('');
    const[job_description,setDescription]=useState('');
    const[job_payment_cycle,setCycle]=useState('');
    const[job_amount,setAmount]=useState('');
    const[job_category_id,setCat]=useState('');
    const[is_active,setActive]=useState('');
    
    const handleSubmit = async(event) => {
        const token='86|0CMwHKCZZ0Qg0b9sXD2EAwIjBLG7ne4tlcV2AHtY';
        event.preventDefault();
        // const name_check=/^[a-zA_Z. ]{3,30}$/gm;
        // const pass_check=/^(?=.*[0-9])(?=.*[!@$%^&*#])[A-Za-z0-9!@#$%^&*]{8,16}$/gm;
        const data={
            'job_name':job_name,
            'job_description':job_description,
            'job_payment_cycle':job_payment_cycle,
            'job_amount':job_amount,
            'job_category_id':job_category_id,
            'is_active':is_active
        }
        const response=await fetch('http://scholarshiftapi.divasdoor.com/api/job',{
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
        setActive('')
        setAmount('')
        setCat('')
        setCycle('')
        setDescription('')
        setName('')
    };


    return(
        <div className='container'>
            <div className='login-box my-5 mx-auto text-white px-5 py-3 rounded'>
                <h2 className='text-center'>Job Details</h2>
                <form onSubmit={ handleSubmit }>
                    <div className="mb-3">
                        <label htmlFor="job_name" className="form-label">Job Name</label>
                        <input type="text" className="form-control" id="job_name" required value={job_name} onChange={(e) => setName(e.target.value)} />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="job_description" className="form-label">Job Description</label>
                        <textarea type="text" className="form-control" rows='3' id="job_description" required value={job_description} onChange={(e) => setDescription(e.target.value)} />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="job_payment_cycle" className="form-label">Job Payment Cycle</label>
                        <input type="number" className="form-control" id="job_payment_cycle" required value={job_payment_cycle} onChange={(e) => setCycle(e.target.value)} />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="job_amount" className="form-label">Job Amount</label>
                        <input type="number" className="form-control" id="job_amount" required value={job_amount} onChange={(e) => setAmount(e.target.value)} />   
                    </div>
                    <div className="mb-3">
                        <label htmlFor="job_category_id" className="form-label">Job Category</label>
                        <input type="number" className="form-control" id="job_category_id" required value={job_category_id} onChange={(e) => setCat(e.target.value)} />   
                    </div>
                    <select className="form-select mb-3" aria-label="Default select example" value={is_active} onChange={(e) => setActive(e.target.value)}  >
                        <option value=''>Status of Job</option>
                        <option value="1">Open</option>
                        <option value="0">Close</option>
                    </select>                 
                    <button type="submit" className="btn">Create</button>
                </form>
            </div>
        </div>
    );
}
export default JobCreate