import "./testimonail.css"
import imag from '../../assete/persons/McMurphy.jpg'
export default function CarsouleItem({person , review, image, active}){
    return(
        <>
            <div className= {`carousel-item ${active} text-center `}>
                <div className="testimonials_card ">
                    <i className="fas fa-quote-left quote"></i>
                    <p className="review_text">{review}</p>
                    <i className="fas fa-quote-right quote"></i>
                    <div className="rating pb-2 ">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                <div className="testimonials_picture">
                    <img src={imag} alt="" className="img-fluid" />
                </div>
                <div className="testimonials_name">
                    <h3>{person}</h3>
                </div>
            </div>
        </>
    )
}