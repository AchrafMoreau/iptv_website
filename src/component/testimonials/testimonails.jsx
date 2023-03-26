import Profiel from "../../assete/persons/Anton_Chigurh.jpg"
import "./testimonail.css"
import CarsouleItem from "./carsouleitem"
export default function Testimonails(){
    const review_data = [
        {
            id: 1,
            username: 'Achraf',
            review: "I would highly recommend this IPTV service to anyone looking for a reliable and high-quality streaming solution. With their excellent customer service, easy setup process, and extensive channel selection, it's definitely worth the investment. I give it a solid 5 out of 5 stars.",
            active: 'active'
        },
        {
            id:2,
            username: 'Achraf',
            review: "The channel selection is excellent, with a wide variety of options in different languages and genres. The streaming quality is also top-notch, with high definition and smooth playback.",
            active: ''

        },
        {
            id:3,
            username: 'Achraf',
            review: "I recently purchased an IPTV service from this provider and I must say, I am thoroughly impressed with the quality of their service. The setup was very easy and their customer support team was very helpful and responsive to all of my inquiries.",
            active: ''

        }
    ]
    return(
        <>
            <div className="row text-center text-white mb-4">
                <h1 className="fw-bold">Testimonials</h1>
                <p className="lead pt-1">what our clients are saying</p>
            </div>
            <div className="container testimonails">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {review_data.map((elm)=>{
                            return(
                                <CarsouleItem key={elm.id} person={elm.username} review={elm.review} image={elm.profiel} active={elm.active}/>
                            )
                        })}
                    </div>
                    <div className="text-center">
                        <button className="carrsolBtn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button className="carrsolBtn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}