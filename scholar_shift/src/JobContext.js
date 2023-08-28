import {createContext} from 'react'

let JobContext = createContext({
    job: {
        id:null,
        job_name:null,
        job_description:null,
        job_payment_cycle:null,
        job_amount:null
    }
});
    
export default JobContext;
