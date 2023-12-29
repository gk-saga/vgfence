export const Counter = () => {
    return (
        <div className="container-fluid facts my-5 py-5 bg-light">
        <div className="container  pt-3 pb-4">
            <div className="row g-5">
                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <i className="fa fa-users fa-3x text-primary mb-3"></i>
                    <h1 className="display-6 counter-txt" data-toggle="counter-up">10</h1>
                    <span className="fs-5 counter-txt">Years of Experience</span>
                    <hr className="bg-white w-25 mx-auto mb-0"/>
                </div>
                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-check fa-3x text-primary mb-3"></i>
                    <h1 className="display-6 counter-txt" data-toggle="counter-up">800</h1>
                    <span className="fs-5 counter-txt">Satisfied customers</span>
                    <hr className="bg-white w-25 mx-auto mb-0"/>
                </div>
                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-users-cog fa-3x text-primary mb-3"></i>
                    <h1 className="display-6 counter-txt" data-toggle="counter-up">5</h1>
                    <span className="fs-5 counter-txt">Lakhs Sqft Of Fencing Executed</span>
                    <hr className="bg-white w-25 mx-auto mb-0"/>
                </div>
                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    <i className="fa fa-award fa-3x text-primary mb-3"></i>
                    <h1 className="display-6 counter-txt" data-toggle="counter-up">5</h1>
                    <span className="fs-5 counter-txt">States of Services Delivered</span>
                    <hr className="bg-white w-25 mx-auto mb-0"/>
                </div>
            </div>
        </div>
    </div>
    )
}