import './Popular_jobs.css'

const Popular_jobs=(props)=>{
    return(
        <div className="popular-box">
            <div className='popular-image mx-auto mb-2' style={{backgroundColor:`${props.style}`}}>
                <img src={props.image} alt='image-popular'></img>
            </div>
            <p>{props.caption}</p>
        </div >
    )

}
export default Popular_jobs