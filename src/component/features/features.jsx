import "./features.css";
import ESPN from '../../assete/Walt-Disney-Home-Video.png';
import FOX1 from '../../assete/ESPN-Plus.png';
import FOX2 from '../../assete/ESPN-Deportes.png';
import EuroSport from '../../assete/10-News-First.png';
import BeinSport from '../../assete/channel9.png';
import Neflix from "../../assete/Netflix.png";
import first_news from "../../assete/Fox-Sports.png";
import HBO from "../../assete/HBO-Home-Box-Office.png";
import SBS from "../../assete/SBS.png" ;
import cbs from "../../assete/CBS-Media-Columbia-Broadcasting-System.png";
import sky from "../../assete/Sky-Sports.png";
import Fade from 'react-reveal/Fade';


export default function Features(){

    let channels = [ESPN, FOX1, FOX2, EuroSport, BeinSport, Neflix, first_news, HBO, SBS,cbs, sky ,ESPN, FOX1, FOX2, EuroSport, BeinSport, Neflix, first_news, HBO, SBS, cbs, sky]
    const display = channels.map((elm, key)=>{
        return(
            <div key={key} className="channel_name">
                <img src={elm} alt="" />
            </div>
        )
    })
    console.log(display)
    return(
        <div className="gradient">
            <Fade top>

                <div className="container hero">
                    <div className="row">

                        <div className="col-md-4 features">
                            <div className="icon">
                                <i className="fa-sharp fa-solid fa-headset"></i>
                            </div>
                            <h2>Full Network Visibility</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                        <div className="col-md-4 features">
                            <div className="icon">
                                <i className="fa-sharp fa-regular fa-high-definition"></i>
                            </div>
                            <h2>Full Network Visibility</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                        <div className="col-md-4 features">
                            <div className="icon">
                                <i className="fa-sharp fa-solid fa-headset"></i>
                            </div>
                            <h2>Full Network Visibility</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                    </div>
                </div>
            </Fade>

            <div className="container channel">
                <div className="myslider">
                    {display}
                    <h1>sa</h1>
                </div>
            </div>

        </div>
    )
}