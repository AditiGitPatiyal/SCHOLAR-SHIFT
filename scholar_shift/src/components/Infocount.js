import './Infocount.css'

const Infocount=(props)=>{
    return (
        <div  className="infocounters ng-star-inserted text-center">
            <div  className="infocupimg d-flex justify-content-center align-items-center">
                <img  src={props.image} alt="Students in our Work Force" />
            </div>
            <strong  className="d-block fw-bolder">{props.count}  +</strong>
            <p  className="capitalize text-mainorange mt-9 text-3xl 2xl:text-xl">{props.para}</p>
        </div>
    );


}
export default Infocount