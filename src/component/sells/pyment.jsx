import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { json, useLocation } from "react-router-dom"; 

const Payment = ()=>{
    const location = useLocation();
    const { from } = location.state;

    return(
        <>
            <div className="text-center buyNow">
                <h1 className="text-center my-5">please chose your Payment method</h1>
                <div className="row pyment text-center">
                    <div className="col-md-12">
                        <h1 className="mb-5">paypal</h1>
                        <PayPalScriptProvider 
                            options={{
                                "client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID
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
            </div>
        </>
    )
}

export default Payment