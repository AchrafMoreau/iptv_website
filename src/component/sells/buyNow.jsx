import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "./buyNow.css";

export default function Sells(props){
    const [allvlid, setAllvalid] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [value, setValue] = useState({
        firt_name:'',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        Zip: '',
    })
    const location = useLocation();
    const { from } = location.state;

    function handelSubmit(e){
        e.preventDefaulte();
        console.log('all good')
    }
    return (
        <> 
            <div className="contectGrid container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <div className="container buyNow mb-5 ">
                            <h1 className="text-center my-5">Please fill all the informations</h1>
                            <form onSubmit={handelSubmit}>
                                <div className="row mt-5">
                                    <div className="col-md-6">
                                        <label htmlFor="first_name" className="lable-control">First Name*</label>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="First name" 
                                                onChange={(e) => setValue(e.target.value)}
                                                required
                                                name="first_name"
                                                value={value.firt_name}
                                                />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="last_name" className="lable-control">Last Name*</label>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="Last name" 
                                                onChange={(e) => setValue(e.target.value)}
                                                required
                                                name="last_name"
                                                value={value.last_name}
                                                />
                                    </div>
                                </div>
                                <div className="col-md-12 my-3">
                                    <label htmlFor="email" className="lable-control">email*</label>
                                    <input type="email" 
                                                    className="form-control" 
                                                    placeholder="email" 
                                                    onChange={(e) => setValue(e.target.value)}
                                                    required
                                                    name="email"
                                                    value={value.email}
                                                    />
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-6">
                                        <label htmlFor="address1" className="lable-control">address 1*</label>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="address" 
                                                onChange={(e) => setValue(e.target.value)}
                                                required
                                                name="address1"
                                                value={value.address}
                                                />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="address2" className="lable-control">address 2</label>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="address" 
                                                onChange={(e) => setValue(e.target.value)}
                                                required
                                                name="address"
                                                />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-4">
                                        <label htmlFor="phone"></label>
                                        <PhoneInput
                                            className="phoneNumber"
                                            international
                                            countryCallingCodeEditable={false}
                                            defaultCountry="AU"
                                            value={value.phone}
                                            onChange={(value) => setValue({ phone: value })}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="city" className="lable-control">City*</label>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="City" 
                                                onChange={(e) => setValue(e.target.value)}
                                                required
                                                name="city"
                                                value={value.city}
                                                />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="zip" className="lable-control">Zip*</label>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="Zip" 
                                                onChange={(e) => setValue(e.target.value)}
                                                required
                                                name="zip"
                                                value={value.Zip}
                                                />
                                    </div>
                                    <div type="submit" className="mt-5 row" style={{width:'50%',margin:'auto'}}>
                                        <PayPalScriptProvider 
                                            options={{
                                                "client-id":"AWuZ2WMF9bFZwc7H4TV9wGs0dEAdORxK_YHlDqakz5Xl39-Q2D6aHWGn0xqeYdji_xWdwyCzHmUJPTgl"
                                            }}>
                                            <PayPalButtons 
                                                createOrder={(data, actions) =>{
                                                    return actions.order.create({
                                                        purchase_units:[
                                                            {
                                                                amount:{
                                                                    value: from[0],
                                                                },
                                                            },
                                                        ],
                                                    });
                                                }}/>
                                        </PayPalScriptProvider>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-3">
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
                </div>

            </div>
        </>
    )
  }
