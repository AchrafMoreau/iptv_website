import "./contact.css";
import { useState } from "react";
// import { database } from "../firebase/firebase"
export default function Contact(){

    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setemail] = useState('')
    const [adress, setadress] = useState('')

    function handesubmit(e){
        e.preventDefault()

        const blog = { name, last, email, adress};
        
    }

    return(
        <>
            <div className="container-fluid Contact">
                <h1>Contact</h1>
            </div>
            <form className="container myfrom" onSubmit={handesubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" 
                                className="form-control" 
                                placeholder="First name" 
                                aria-label="First name" 
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                
                                />
                    </div>
                    <div className="col-md-6">
                        <input type="text" 
                                className="form-control" 
                                placeholder="Last name" 
                                aria-label="Last name"
                                onChange={(e) => setLast(e.target.value)}
                                value={last}
                                />
                    </div>
                </div>
                <div className="col-md-12 my-5">
                    <input type="text" 
                            className="form-control" 
                            placeholder="email" 
                            aria-label="email"
                            onChange={(e) => setemail(e.target.value)}
                            value={email}
                            />
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" 
                                className="form-control"   
                                placeholder="adress" 
                                aria-label="adress"
                                onChange={(e) => setadress(e.target.value)}
                                value={adress}
                                />
                    </div>
                    <div className="col-md-6">
                        <input type="text" 
                                className="form-control" 
                                placeholder="city" 
                                aria-label="city"
                                />
                    </div>
                </div>
                <div className="form-floating my-5">
                    <textarea className="form-control" 
                                placeholder="Leave a comment here" 
                                id="floatingTextarea" >
                    </textarea>

                </div>
                <div className="text-center">
                    <button className="btn btn-danger">Submit</button>

                </div>
            </form>
        </>
    )
}