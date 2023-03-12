import "./contact.css";
import { db } from "../firebase/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useState, useRef } from "react";

export default function Contact(){
    
    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setemail] = useState('')
    const [message, setMessage] = useState('')
    
    const [isSend, setIsSend] = useState(false)


    const colRef = collection(db, 'userInfo')
    // useEffect(()=>{
    //     getDocs(colRef)
    //         .then((data)=>{
    //             let filtermydata = []
    //             data.docs.map((elm)=>{
    //                 filtermydata.push({...elm.data(), id:elm.id})
    //             })
    //             console.log(filtermydata);
    //         }).catch((err)=>{
    //             console.log("somthing wrong", err)
    //         })
    // }, [])


    function handesubmit(e){
        e.preventDefault()
        if( message.length > 2 && email.length > 5) {
            addDoc(colRef , {
                email: email,
                first_name: name,
                last_name: last,
                message: message,
            }).then(()=>{
                setIsSend(true)
            })
            .catch((err)=>console.log(err))
        }
        setName('')
        setLast("")
        setemail('')
        setMessage("")
        setIsSend(false)
    }
    
    return(
        <section id="contact">
            <div className="container-fluid contact_title">
                <h1>Contact</h1>
            </div>
            <div className="container contact">
                <div className="row text-center">

                    <div className="col-md-4 contact_content ">
                        <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <h2>Phone</h2>
                        <div className="text">
                            <p>+212 61-1256413</p>
                            <p>+212 61-1256413</p>
                        </div>
                    </div>
                    <div className="col-md-4 contact_content">
                        <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h2>Email</h2>
                        <div className="text">
                            <p>elachraf6@gmail.com</p>
                            <p>elachraf6@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-4 contact_content">
                        <div className="icon">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <h2>Working Hour</h2>
                        <div className="text">
                            <p>Wednesday - Sunday</p>
                            <p>7:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center mb-4">
                <h3 className="headline">Send a Message</h3>
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
                                pattern="[A-za-z0-9]{3,16}$" 
                                />
                        <span className="err">more than three character please</span>
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
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            />
                    <span className="err">Please you have to write your email like this :  characters@characters.domain</span>
                </div>
                <div className="col-12 mb-5">
                    <textarea className="form-control" 
                                placeholder="Leave your message here" 
                                id="floatingTextarea" rows={6}
                                value={message}
                                onChange={(e)=> setMessage(e.target.value)}>
                                
                    </textarea>
                    <span className="err">you can't submit without a message</span>
                </div>

                <div className="text-center submit">
                    <button
                        className={isSend ? "send": 'bubbly-button'}
                        >{isSend? "Send": "Submit"}</button>

                    {/* <button className={isSend ? isSend.massage: "bubbly-button"}>{isSend? isSend.class: "Submit"}</button> */}

                </div>
            </form>
        </section>
    )
}
