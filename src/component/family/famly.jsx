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
                            <h1>ENjoy MOvies With your family</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo repellat sed nam aliquid doloribus tenetur expedita, similique adipisci quis, iste, velit placeat voluptas repudiandae veritatis obcaecati quidem perferendis libero?</p>
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