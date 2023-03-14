import "./family.css";
import Image from "../../assete/family.jpg"
import  Fade  from 'react-reveal/Fade';


export default function Family(){


    return(
        <div>
            <div className="container family_section" >
                <div className="row">
                    <Fade left>
                        <div className="col-md-6 content pop-up">
                            <h1>Enjoy Movies With your family</h1>
                            <p>At our IPTV service, we believe in bringing the whole family together with the best entertainment possible. Our extensive library of channels and on-demand content caters to every member of your family. From live sports and movies to educational programming and children's shows, we have something for everyone. Our goal is to provide a one-stop-shop for all your entertainment needs, so you can sit back, relax, and enjoy quality time with your loved ones.</p>
                        </div>
                    </Fade>
                    <div className="col-md-6 ppl">
                        <Fade right>
                            <img src={Image} alt=""/>
                        </Fade>
                    </div>
                </div>
            </div>

        </div>
    )
}