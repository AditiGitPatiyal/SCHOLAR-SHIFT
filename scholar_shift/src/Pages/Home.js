import './Home.css'
import Popular_jobs from '../components/Popular_jobs';
import Jointheexp from '../components/Jointheexp';
import Stepsitem from '../components/stepsitem';
import Infocount from '../components/Infocount';
import Reviewbox from '../components/review_box';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate= useNavigate();
    return (
        <>
            <div className='banner section'>
                <div className='container'>
                    <div className='row align-items-end'>
                        <div className='col-lg-6'>
                            <div className='banner-text'>
                                <p className='text-lightgray text-welcome m-0'>Welcome to</p>
                                <h2 className='fw-bold my-4 text-white'>SCHOLAR SHIFTS</h2>
                                <p className='text-lightgray me-5 mb-0 text-para'>Boost Your Skills, Elevate Your Career, and Achieve Financial Independence -
                                    Your Path to Student Freelancing Success.</p>
                                <div className='banner-search'>
                                    <form>
                                        <div className='d-flex'>
                                            <input type='search' placeholder='What are you looking for?' />
                                            <button className='ms-2 px-4 py-2'>Search</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='d-flex align-items-center banner-end'>
                                    <p className=" text-white">POPULAR:</p>
                                    <ul className='list-unstyled d-flex'>
                                        <li>
                                            <a>
                                                <Popular_jobs
                                                    style='#f0602d'
                                                    image='./images/digitalmarketing.png'
                                                    caption='MARKETING' />

                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <Popular_jobs
                                                    style='#25c4ff'
                                                    image='./images/creativity.png'
                                                    caption='DESIGN' />

                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <Popular_jobs
                                                    style='#fff'
                                                    image='./images/blogger.png'
                                                    caption='ADMINISTRATION' />

                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <Popular_jobs
                                                    style='#25c4ff'
                                                    image='./images/pet-care.png'
                                                    caption='PET CARE' />

                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <Popular_jobs
                                                    style='#f0602d'
                                                    image='./images/recruitment.png'
                                                    caption='ODD JOBS' />

                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='banner-image'>
                                <img src='./images/threegirls.png' alt='threegirls-banner-img'></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='jointhexp section'>
                <div className='container'>
                    <div className='jointhexp-text text-center'>
                        <h4 className="fw-bold text-uppercase mb-4"> Join The Experience </h4>
                        <p>Founded by graduates with first-hand experience of student life, ScholarShifts is tailored to you and your needs!
                            It is your go-to freelancing platform, connecting you with a wide range of student freelance jobs from startups to big brands and everything in between. Discover opportunities that align with your schedule and interests, and leverage your skills,
                            whether it's graphic design, writing, dog walking, tutoring, or something entirely unique.</p>
                        <p className='mb-5'>
                            Join the ScholarShifts revolution today to earn while you learn, showcasing your abilities, expanding your portfolio, and boosting your confidence.
                        </p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <Jointheexp image='./images/coinicon.png'
                                onClick={()=>{navigate('./login')}}
                                head='Earn While You Learn!'
                                para='Are you a motivated student looking to gain valuable experience, and extra income? Why not leverage your skills and unlock the potential to earn on your own flexible schedule? 
                        Turn your abilities into opportunities, broaden your horizon, and bolster your confidence, all while reaping the rewards. 
                        ScholarShifts connects you with a vibrant community of employers seeking talented students just like you - your student freelance journey starts here!'/>

                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <Jointheexp image='./images/persons.png'
                                onClick={()=>{navigate('./login')}}
                                head='Hire A Student Freelancer'
                                para='Are you an employer in search of fresh perspectives and driven individuals? With ScholarShifts, you gain access to a diverse pool of talented students who bring unique energy and new ideas to the table. 
                        Whether you need assistance with social media marketing, accounting, research, or any other task, our network of student freelancers has got you covered. 
                        Hiring students has never been more rewarding!'/>

                        </div>
                    </div>
                </div>
            </div>
            <div className='esaystep_sec section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-6'>
                            <div className='easy_step_text'>
                                <h4 className='text-left'>Unleash Your Potential with ScholarShifts</h4>
                                <ul className="stepsitems list-unstyled">
                                    <li className="mb-6 ng-star-inserted">
                                        <Stepsitem heading='Easy Sign-Up'
                                        para='Joining ScholarShifts is quick and hassle-free. 
                                        Our user-friendly sign-up process ensures that you can create your profile and start exploring job opportunities in no time.' />
                                        
                                    </li>
                                    <li  className="mb-6 ng-star-inserted">
                                        <Stepsitem heading='User-Friendly Job Search'
                                        para='Finding your ideal freelance job has never been simpler. Our job search allows you to swiftly filter through listings based on your preferences: industry, location, project duration, and more. 
                                        ScholarShifts makes it just a few clicks away to find the perfect match for your skills and interests.'
                                        />
                                    </li>
                                    <li  className="mb-6 ng-star-inserted">
                                        <Stepsitem heading='Take Your Pick!'
                                        para='Unlock a world of exciting student freelance opportunities at your fingertips - ScholarShifts offers a diverse array of job listings, 
                                        ensuring there’s something for everyone - let ScholarShifts be your gateway to student freelancing.'
                                        />
                                    </li>
                                    <li  className="mb-6 ng-star-inserted">
                                        <Stepsitem heading='Flexible Work'
                                        para='Flexible work arrangements designed for student success - No more juggling between classes, assignments, and work commitments.
                                         Find freelancing opportunities that seamlessly fit into your university life, striking the perfect balance.' />
                                        
                                    </li>
                                    <li  className="mb-6 ng-star-inserted">
                                        <Stepsitem heading='Dedicated Support'
                                        para="'We've got your back throughout the freelancing adventure - our dedicated support team is here to assist you with any questions or concerns. 
                                        Count on us for reliable support and friendly guidance as you navigate the exciting world of student freelancing.'"/>
                                        
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className='col-sm-12 col-lg-6 esaystep_image'>
                            <img src='./images/jobcompleted.png' />
                        </div>

                    </div>
                </div>
            </div>
            <div className='section information_counting'>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-lg-3'>
                            <Infocount image='./images/persons.png'
                            count='200k'
                            para='Students In Our Work Force'/>

                        </div>
                        <div className='col-lg-3'>
                            <Infocount image='./images/briefcase.png'
                            count='7k'
                            para='Job Opportunies For You'/>
                            
                        </div>
                        <div className='col-lg-3'>
                            <Infocount image='./images/moneyinc.png'
                            count='450k'
                            para='Worth of Assigned Task for You'/>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='wedomain section text-center' >
                <div className='container'>
                    <div className='wedomain_text'>
                        <h4 className='fw-bold'>Ready to Begin? Join ScholarShifts Today!</h4>
                        <p>Be a part of the ScholarShifts revolution and embark on your student freelancing journey today!</p>
                        <a className="fw-bold  d-block mx-auto text-white hoverbtn" onClick={()=>{navigate('./what-we-do')}} >what we do</a>
                        <img src='./images/cartoonpersons.png' alt='cartoonpersons' />
                    </div>
                </div>

            </div>
            <div className='section reviews'>
                <div className='container'>
                    <h2 className="text-center text-uppercase fw-bold">Reviews</h2>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-4'>
                            <Reviewbox />

                        </div>
                        <div className='col-sm-12 col-lg-4'>
                        <Reviewbox />
                            
                        </div>
                        <div className='col-sm-12 col-lg-4'>
                        <Reviewbox />
                            
                        </div>
                    </div>
                    <a onClick={()=>{navigate('./login')}} className='text-center d-block mx-auto text-white'>SIGNUP</a>
                </div>
            </div>

        </>

    );
}
export default Home