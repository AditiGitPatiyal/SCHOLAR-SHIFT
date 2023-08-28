import './Footer.css'
import Logo from "../logo/mainlogo.png";
import {Link} from 'react-router-dom'




const Footer=()=>{
    return(
        <footer style={{backgroundColor:'#5939ff'}} className='mt-5 py-4'>
            <div className='container'>
                <div className='d-flex justify-content-between footer-top'>
                    <div className='footer-logo'>
                        <Link  to='/'><img src={Logo} alt='logo'></img></Link>
                    </div>
                    <div className='d-flex text-light align-items-center'>
                        <i className="fa-brands fa-square-facebook me-3"></i>
                        <i className="fa-brands fa-instagram me-3"></i>
                        <i className="fa-brands fa-linkedin me-3"></i>
                        <i className="fa-brands fa-twitter me-3"></i>
                    </div>
                </div>
                <div className='d-flex justify-content-between text-white mt-4'>
                    <div className='col-lg-3'>
                        <p>Boost Your Skills, Elevate Your Career, and Achieve Financial Independence - Your Path to Student Freelancing Success.</p>

                    </div>
                    <div className='col-lg-3'>
                        <h4>More</h4>
                        <ul  className="text-white leading-none list-unstyled">
                            <li  className="mb-3">I am a Student</li>
                            <li  className="mb-3">I have a vacancy</li>
                            <li  className="mb-3">Careers</li>
                            <li  className="mb-3">About Us</li>
                            <li  className="mb-3">Blogs</li>
                        </ul>
                        
                    </div>
                    <div className='col-lg-3'>
                        <div className=''>
                            <h4  className="text-white mb-3"> Contact Us </h4>
                            <h3  className="text-white mb-3"> Drop Us a Message </h3>
                            <p  className="text-white ">trotty5184@hotmail.co.uk</p>
                        </div>
                        
                    </div>
                </div>


            </div>
        </footer>
    )
}
export default Footer