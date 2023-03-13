import "./packs.css"
import Tada from 'react-reveal/Tada';
import { Fade } from "react-reveal";
export default function Packs(){
    return(
        <div className="plan" id="Packs">
            <svg sxmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#242582" fillOpacity="1" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,90.7C672,85,768,43,864,48C960,53,1056,107,1152,117.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="container packs text-center">
                <Fade left>
                    <h1 className="mb-5">Chose Your Plan</h1>
                </Fade>
                <div className="grid">
                    <div className="pack_content">
                        <div className="upper">
                            <h1>1 month</h1>
                            <p>INSTANT DELIVERY</p>
                        </div>
                        <h4 className="price">25<span>$</span></h4>
                        <Fade cascade>
                            <ul className="pack_feature text-start">
                                <li>Over 10.000 Channels</li>
                                <li>Over 50.000 Movies & TV Shows</li>
                                <li>HD & SD & FHD Channels</li>
                                <li>TV Guide (EPG)</li>
                                <li>Support All Devices</li>
                                <li>24/7 support</li>
                                <li>99.9% Uptime</li>
                            </ul>
                        </Fade>
                        <button className="buy_btn">BUY NOW</button>
                    </div>
                    <Tada >
                        <div className="pack_content">
                            <div className="upper">
                                <h1>3 month</h1>
                                <p>INSTANT DELIVERY</p>
                            </div>
                            <h4 className="price">60<span>$</span></h4>
                            <Fade cascade>
                                <ul className="pack_feature text-start">
                                    <li>Over 10.000 Channels</li>
                                    <li>Over 50.000 Movies & TV Shows</li>
                                    <li>HD & SD & FHD Channels</li>
                                    <li>TV Guide (EPG)</li>
                                    <li>Support All Devices</li>
                                    <li>24/7 support</li>
                                    <li>99.9% Uptime</li>
                                </ul>
                            </Fade>
                            <button className="buy_btn">BUY NOW</button>
                        </div>
                    </Tada>
                    <div className="pack_content">
                        <div className="upper">
                            <h1>6 month</h1>
                            <p>INSTANT DELIVERY</p>
                        </div>
                        <h4 className="price">200<span>$</span></h4>
                        <Fade cascade>
                            <ul className="pack_feature text-start">
                                <li>Over 10.000 Channels</li>
                                <li>Over 50.000 Movies & TV Shows</li>
                                <li>HD & SD & FHD Channels</li>
                                <li>TV Guide (EPG)</li>
                                <li>Support All Devices</li>
                                <li>24/7 support</li>
                                <li>99.9% Uptime</li>
                            </ul>
                        </Fade>
                        <button className="buy_btn">BUY NOW</button>
                    </div>
                </div>
                <div className="grid mt-5">
                    <div className="pack_content">
                        <div className="upper">
                            <h1>1 Year</h1>
                            <p>INSTANT DELIVERY</p>
                        </div>
                        <h4 className="price">25<span>$</span></h4>
                        <Fade cascade>
                            <ul className="pack_feature text-start">
                                <li>Over 10.000 Channels</li>
                                <li>Over 50.000 Movies & TV Shows</li>
                                <li>HD & SD & FHD Channels</li>
                                <li>TV Guide (EPG)</li>
                                <li>Support All Devices</li>
                                <li>24/7 support</li>
                                <li>99.9% Uptime</li>
                            </ul>
                        </Fade>
                        <button className="buy_btn">BUY NOW</button>
                    </div>
                    <div className="pack_content">
                        <div className="upper">
                            <h1>24 Month</h1>
                            <p>INSTANT DELIVERY</p>
                        </div>
                        <h4 className="price">200<span>$</span></h4>
                        <Fade cascade>
                            <ul className="pack_feature text-start">
                                <li>Over 10.000 Channels</li>
                                <li>Over 50.000 Movies & TV Shows</li>
                                <li>HD & SD & FHD Channels</li>
                                <li>TV Guide (EPG)</li>
                                <li>Support All Devices</li>
                                <li>24/7 support</li>
                                <li>99.9% Uptime</li>
                            </ul>
                        </Fade>
                        <button className="buy_btn">BUY NOW</button>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#242582" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,181.3C672,181,768,139,864,138.7C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
    )
}