import "./features.css";
import ESPN from '../../assete/ESPN.png';
import FOX1 from '../../assete/FOXsport.png';
import FOX2 from '../../assete/FOXsport2.png';
import EuroSport from '../../assete/EuroSport.png';
import BeinSport from '../../assete/BeinSport.png';

export default function Features(){
    return(
        <div>
            <div className="container hero">
                <div className="row">

                    <div className="col-md-4 features">
                        <div className="icon">
                            <i class="fa-sharp fa-solid fa-headset"></i>
                        </div>
                        <h2>Full Network Visibility</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                    </div>
                    <div className="col-md-4 features">
                        <div className="icon">
                            <i class="fa-sharp fa-solid fa-headset"></i>
                        </div>
                        <h2>Full Network Visibility</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                    </div>
                    <div className="col-md-4 features">
                        <div className="icon">
                            <i class="fa-sharp fa-solid fa-headset"></i>
                        </div>
                        <h2>Full Network Visibility</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                    </div>
                </div>
            </div>

            <div className="container channel">
                <div className="myslider">
                    <div className="channel_name">
                        <img src={ESPN} alt="" />
                    </div>
                    <div className="channel_name">
                        <img src={BeinSport} alt="" />
                    </div>
                    <div className="channel_name">
                        <img src={FOX1} alt="" />
                    </div>
                    <div className="channel_name">
                        <img src={FOX2} alt="" />
                    </div>
                    <div className="channel_name">
                        <img src={EuroSport} alt="" />
                    </div>
                    <div className="channel_name">
                        <img src={ESPN} alt="" />
                    </div>
                    <div className="channel_name">
                        <img src={BeinSport} alt="" />
                    </div>
                    <div className="channel_name">
                        <img src={FOX1} alt="" />
                    </div>
                    <div className="channel_name">
                        <img src={FOX2} alt="" />
                    </div>
                    <div className="channel_name">
                        <img src={EuroSport} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}