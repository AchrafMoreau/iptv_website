import "./family.css";
import Image from "../../assete/family.jpg"

export default function Family(){
    return(
        <div>
            <div className="container family_section">
                <div className="row">
                    <div className="col-md-6 content">
                        <h1>ENjoy MOvies With your family</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo repellat sed nam aliquid doloribus tenetur expedita, similique adipisci quis, iste, velit placeat voluptas repudiandae veritatis obcaecati quidem perferendis libero?</p>
                    </div>
                    <div className="col-md-6 ppl">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}