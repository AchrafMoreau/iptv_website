import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./buyNow.css";

export default function Sells(props){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [value, setValue] = useState({
        firt_name:'',
        last_name: '',
        email: '',
        phone: '',
        adress: '',
        city: '',
        Zip: '',
    })
    const location = useLocation();
    const { from } = location.state;
    return (
        <> 
            <div className="contectGrid">
                <div className="container buyNow">
                    <h1 className="text-center mb-5">Please fill all the informations</h1>
                    <form >
                        <div className="row my-5">
                            <div className="col-md-6">
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="First name" 
                                        onChange={(e) => setValue(e.target.value)}
                                        name="first_name"
                                        value={value.firt_name}
                                        />
                            </div>
                            <div className="col-md-6">
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="Last name" 
                                        onChange={(e) => setValue(e.target.value)}
                                        name="last_name"
                                        value={value.last_name}
                                        />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input type="email" 
                                            className="form-control" 
                                            placeholder="email" 
                                            onChange={(e) => setValue(e.target.value)}
                                            name="email"
                                            value={value.email}
                                            />
                        </div>
                        <div className="row my-5">
                            <div className="col-md-6">
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="Phone" 
                                        onChange={(e) => setValue(e.target.value)}
                                        name="phone"
                                        value={value.phone}
                                        />
                            </div>
                            <div className="col-md-6">
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="Adress" 
                                        onChange={(e) => setValue(e.target.value)}
                                        name="adress"
                                        value={value.adress}
                                        />
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-6">
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="City" 
                                        onChange={(e) => setValue(e.target.value)}
                                        name="city"
                                        value={value.city}
                                        />
                            </div>
                            <div className="col-md-6">
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="Zip" 
                                        onChange={(e) => setValue(e.target.value)}
                                        name="zip"
                                        value={value.Zip}
                                        />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="package">
                    <div className='pack_content '>
                        <div className="upper">
                            <h1>{from[1]}</h1>
                            <p>INSTANT DELIVERY</p>
                        </div>
                        <h4 className="price">{from[0]}<span>$</span></h4>
                        <ul className="pack_feature text-start">
                            <li>Over 10.000 Channels</li>
                            <li>Over 50.000 Movies & TV Shows</li>
                            <li>HD & SD & FHD Channels</li>
                            <li>TV Guide (EPG)</li>
                            <li>Support All Devices</li>
                            <li>24/7 support</li>
                            <li>99.9% Uptime</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
  }
