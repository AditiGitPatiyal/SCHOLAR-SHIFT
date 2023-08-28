import './Jointheexp.css'

const Jointheexp=(props)=>{
    return(
        <>
           <div className="text-white enterbox ng-star-inserted text-center">
                <img className="mx-auto" src={props.image} alt="Earn While You Learn!" />
                <h4 className="fw-bold leading-none">{props.head}</h4>
                <p className="my-0">{props.para}</p>
                <a className="d-block  mx-auto mt-4 bg-white text-uppercase fw-bold leading-none hoverbtn" href="/login">Enter</a>
           </div>
        </>

    );

}

export default Jointheexp