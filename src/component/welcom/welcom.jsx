import './welcom.css';

export default function Welcom(){
    return(
        <div>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className=" hero1">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Onilne cinema in your smartphone</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat in perferendis, aperiam id rem aliquid assumenda eius provident unde, facilis quos dolor similique ullam quod odit iste, consequuntur expedita deleniti!</p>
                                    <div className="butn">
                                        <button className="btn btn-primary">learn more</button>
                                        <button className="btn btn-danger">start now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className=" hero2">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Onilne cinema  in your smartphone</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat in perferendis, aperiam id rem aliquid assumenda eius provident unde, facilis quos dolor similique ullam quod odit iste, consequuntur expedita deleniti!</p>
                                    <div className="butn">
                                        <button className="btn btn-primary">learn more</button>
                                        <button className="btn btn-danger">start now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className=" hero3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Onilne cinema in your smartphone</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat in perferendis, aperiam id rem aliquid assumenda eius provident unde, facilis quos dolor similique ullam quod odit iste, consequuntur expedita deleniti!</p>
                                    <div className="butn">
                                        <button className="btn btn-primary">learn more</button>
                                        <button className="btn btn-danger">start now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    )
}