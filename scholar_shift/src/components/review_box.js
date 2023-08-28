import './review_box.css'


const Reviewbox = () => {
    return (
        <div className="reviewcard p-5 bg-white">
            <div className="reviewinfomain d-flex flex-wrap">
                <div className="reviewuserimg">
                    <img className="rounded" src="./images/reviewiiii.jpg" alt="Mike" />
                </div>
                <div   className="reviewuserinfo  d-flex flex-wrap align-content-center justify-content-center break-words text-center">
                    <strong   className="font-semibold">Mike</strong>
                    <p >Designation</p>
                </div>
            </div>
            <p  className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
        </div>

    );
}

export default Reviewbox