import './Signup.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Signup = () => {
    const [name, setName] = useState("");
    const[nameerror,setNameerror]=useState('');
    const [email,setEmail] = useState("");
    const[emailerror,setEmailerror]=useState('');
    const [password,setpassword]=useState("");
    const [passworderror,setPerror]=useState("");
    const [selected,setSelected]=useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const name_check=/^[a-zA_Z. ]{3,30}$/gm;
        const pass_check=/^(?=.*[0-9])(?=.*[!@$%^&*#])[A-Za-z0-9!@#$%^&*]{8,16}$/gm;


        if( !name_check.test(name)){
          setNameerror("*Name field must be a string and minimum of 3 character.");    
        } else{
          setNameerror("");
        }
        if( !pass_check.test(password)){
            setPerror("*Password format is wrong.It should include at least one special character and one number and minimum length of 8.");
        }else{
            setPerror("");
            setName('');
            setEmail('');
            setpassword('');
            setSelected(''); 
        }
    
    };

    return (
        <div className='container'>
            <div className='login-box my-5 mx-auto text-white px-5 py-3 rounded'>
                <h2 className='text-center'>Signup</h2>
                <form onSubmit={ handleSubmit }>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                        <p className='error text-danger'>{nameerror}</p>

                    </div>
                    <div className="mb-3">
                        <label htmlForfor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className='error text-danger'>{emailerror}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required value={password} onChange={(e) => setpassword(e.target.value)} />
                        <p className='error text-danger'>{passworderror}</p>
                    </div>
                    <select className="form-select mb-3" aria-label="Default select example" value={selected} onChange={(e) => setSelected(e.target.value)}  >
                        <option selected>Select User Type</option>
                        <option value="1">Job Seeker</option>
                        <option value="2">Job Creator</option>
                    </select>
                    <div className='mb-3'>
                        Already a user <Link to='/login' className='link'><span className='text-light'>Login</span></Link>
                    </div>
                    <button type="submit" className="btn">Sign up</button>
                </form>
            </div>
        </div>
    );
}
export default Signup