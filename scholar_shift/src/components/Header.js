import './Header.css'
import Logo from "../logo/mainlogo.png";
import {Link} from 'react-router-dom'
import UserContext from '../userContext';
import { useContext } from 'react';

const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <div className='header'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link className="navbar-brand" to='/'><img src={Logo} alt='logo'></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link px-3" to='/' href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to='/browse-jobs'>Browse Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to='/what-we-do'>What We Do</Link>
                            </li>
                            
                        </ul>
                        <div className='login_signup ms-3'>
                            { !user ? 
                                <Link to='/login'>
                                    <button className='fw-bold text-black bg-white p-2 border-0'>Login/Signup</button>
                                </Link> 
                            :  user.user_type === 1 ?
                                <Link to='./job-seeker'>
                                    <button className='fw-bold text-black bg-white p-2 border-0'>Dashboard</button>
                                </Link>
                            :
                                <Link to='./job-creator'>
                                    <button className='fw-bold text-black bg-white p-2 border-0'>Dashboard</button>
                                </Link>
                            }
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
}
export default Header;