import "./stepsitem.css";

const Stepsitem = (props) => {
  return (
    <div className=" d-flex align-items-start">
      <img src="./images/right-arrow.png" className="object-contain w-5 h-10" />
      <div className="ms-5">
        <p className="font-bold mb-4 text-black"> {props.heading} </p>
        {props.para}
      </div>
    </div>
  );
};

export default Stepsitem;
