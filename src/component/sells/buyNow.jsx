import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Payment from "./pyment";
import { addDoc,collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "./buyNow.css";

export default function Sells(props){
    const location = useLocation();
    const { from } = location.state;
    const colRef = collection(db, 'user_info')
    const [isvalid, setIsValid] = useState(true);

    const [err, setErr] = useState('');

    
    
    const validation = (values)=>{
        const Errors = {isempty: true}
        const email_patrent =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(values.first_name === "" ){
            Errors.first_name = 'first name is required!'
            Errors.isempty = false
        }
        if(values.last_name === "" ){
            Errors.last_name = 'last name is required!'
            Errors.isempty = false
        }
        if(values.email === ''){
            Errors.email = 'Email is required!'
            Errors.isempty = false
        }
        if(values.phone === '' ){
            Errors.phone = 'phone is required!'
            Errors.isempty = false
        }
        if(values.address === ""){
            Errors.address = "one address is required! ";
            Errors.isempty = false
        }
        if(values.city === ""){
            Errors.city = "city is required!";
            Errors.isempty = false
        }
        if(values.zip === ""){
            Errors.zip = "zip is required!";
            Errors.isempty = false
        }
        return Errors

    }
    const SendData = ()=>{
        console.log(err)
        if (JSON.stringify(err) === "{}" || err.isempty) {
            console.log('was clicked')
            addDoc(colRef , {
                email: value.email,
                first_name: value.first_name,
                last_name: value.last_name,
                adress: value.address,
                phone : value.phone,
                city: value.city,
                zip : value.zip
            }).then(()=>{
                setIsValid(false)
                console.log('isvalid')
            })
            .catch((err)=>console.log(err))
        }
    }
    useEffect(() => {
        SendData()
    }, [err]);
    
    function handelSubmit(event){
        event.preventDefault()
        setErr(validation(value))
        SendData()
        
    }




    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [value, setValue] = useState({
        first_name:'',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
    })

    const handleCahnge = (event)=>{
        setValue(value => ({...value, [event.target.name]: event.target.value}));
    }




    return (
        <> 
            <div className="contectGrid container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        {isvalid && <div className="container buyNow mb-5 ">
                            <h1 className="text-center my-5">Please fill all the informations</h1>
                            <form onSubmit={handelSubmit} noValidate>
                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <label htmlFor="first_name" className="lable-control mb-2">First Name</label>
                                            <input type="text" 
                                                    className="form-control" 
                                                    value={value.first_name}
                                                    placeholder="First name" 
                                                    onChange={handleCahnge}
                                                    required
                                                    name="first_name"
                                                    />
                                            {err.first_name && <p className='err_form'>{err.first_name}</p>}

                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="last_name" className="lable-control mb-2">Last Name</label>
                                            <input type="text" 
                                                    className="form-control" 
                                                    value={value.last_name}
                                                    placeholder="Last name" 
                                                    onChange={handleCahnge}
                                                    required
                                                    name="last_name"
                                                    />
                                            {err.last_name && <p className="err_form">{err.last_name}</p>}
                                        </div>
                                    </div>
                                    
                                    <div className="row my-3">
                                        <div className="col-md-6 ">
                                            <label htmlFor="email" className="lable-control mb-2">email</label>
                                            <input type="email" 
                                                            className="form-control" 
                                                            value={value.email}
                                                            placeholder="email" 
                                                            onChange={handleCahnge}
                                                            required
                                                            name="email"
                                                            />
                                            {err.email && <p className="err_form">{err.email}</p>}
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="address1" className="lable-control mb-2">address 1</label>
                                            <input type="text" 
                                                    className="form-control" 
                                                    value={value.address}
                                                    placeholder="address" 
                                                    onChange={handleCahnge}
                                                    required
                                                    name="address"
                                                    />
                                        {err.address && <p className="err_form">{err.address}</p>}
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-4">
                                            <label htmlFor="phone"></label>
                                            <PhoneInput
                                                value={value.phone}
                                                className="phoneNumber"
                                                international
                                                countryCallingCodeEditable={false}
                                                defaultCountry="AU"
                                                onChange={(value) => setValue(other=>({...other, phone:value}))}/>
                                        {err.phone && <p className="err_form">{err.phone}</p>}

                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="city" className="lable-control mb-2">City</label>
                                            <input type="text" 
                                                    className="form-control" 
                                                    value={value.city}
                                                    placeholder="City" 
                                                    onChange={handleCahnge}
                                                    required
                                                    name="city"
                                                    />
                                        {err.city && <p className="err_form">{err.city}</p>}

                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="zip" className="lable-control mb-2">zip</label>
                                            <input type="text" 
                                                    className="form-control" 
                                                    value={value.zip}
                                                    placeholder="zip" 
                                                    onChange={handleCahnge}
                                                    required
                                                    name="zip"
                                                    />
                                        {err.zip && <p className="err_form">{err.zip}</p>}

                                        </div>
                                        <div className="mt-5 row butn" style={{width:'50%',margin:'auto'}}>
                                            {/* <PayPalScriptProvider 
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
                                            </PayPalScriptProvider> */}
                                            <button type="submit" className="btn">Submit</button>
                                        </div>
                                    </div>
                            </form>
                        </div>}
                        {(!isvalid) ? <Payment /> : ""}
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
