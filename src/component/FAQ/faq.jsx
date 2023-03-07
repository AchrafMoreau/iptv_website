import './faq.css';
import React, { useState, useRef, useEffect } from 'react';





export default function Faq(){

    const [selected, setSelected] = useState(null)

    function toggle(i){
        if( selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
    
    const mydata = [
        {
            Question: "What is IPTV?",
            Answer: " IPTV stands for Internet Protocol Television. It is a digital television broadcasting technology that uses the internet to deliver television programming to viewers."
        },
        {
            Question: "What kind of programming can I expect from your IPTV service?",
            Answer: "Our IPTV service offers a wide range of programming, including live television channels, on-demand movies and television shows, sports programming, and even niche content such as foreign language channels or documentaries."
        },
        {
            Question: "How can I access your IPTV service?",
            Answer: "To access our IPTV service, you will need an internet connection and a compatible device such as a smart TV, computer, or streaming device. You can sign up for a subscription on our website and receive instructions on how to access the service."
        },
        {
            Question: "What are the benefits of using your IPTV service?",
            Answer: "Some of the benefits of using our IPTV service include the ability to customize your programming, access to a wide range of content, and the convenience of being able to watch programming on any device with an internet connection."
        },
        {
            Question: " How much does your IPTV service cost?",
            Answer: "Our IPTV service offers several subscription options at competitive prices. You can visit our website to view our pricing and subscription plans."
        },
        {
            Question: "Can I try your IPTV service before I sign up for a subscription?",
            Answer: "Yes, we offer a free trial period for our IPTV service. You can sign up for a free trial on our website and test the service before committing to a subscription."
        },
        {
            Question: "What kind of support do you offer for your IPTV service?",
            Answer: "We offer comprehensive support for our IPTV service, including technical support, billing support, and customer service. You can contact our support team through our website or by email for assistance."
        },
        {
            Question: "Can I cancel my subscription to your IPTV service at any time?",
            Answer: "Yes, you can cancel your subscription to our IPTV service at any time. You can do so through your account on our website or by contacting our customer service team."
        }
    ]
    return(
        <>
            <div className="container-fluid Faq">
                <h1>The Most Asked questions</h1>
            </div>  
            {mydata.map((elm, index) =>{
                return(
                    <div className='item' key={index}>
                        <div className="question" onClick={() => toggle(index)}>
                            <h3>{elm.Question}</h3>
                            <span className='icon_answer'> 
                                {selected === index ?<i className="icons fa-solid fa-minus"></i>: <i className="icons fa-solid fa-plus"></i> }
                            </span>
                        </div>
                        <div className={`answer ${ selected === index ? "show": ""}`}>
                            {elm.Answer}
                        </div>

                    </div>
                )
            })}
        </>
    )

}