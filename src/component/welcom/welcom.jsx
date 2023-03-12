import './welcom.css';
import Packs from '../pack/start';
import { Link } from "react-scroll";
import { Fade } from 'react-reveal';


export default function Welcom(){

    return(
        <div>

            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="hero1">
                            <div className="row home text-center">
                                <Fade top>
                                    <h1>Unlimited Entertainment at Your Hand</h1>
                                </Fade>
                                <p>Movie lovers can enjoy our extensive selection of blockbuster hits, timeless classics, and independent films. Whether you're in the mood for a romantic comedy or a high-octane action flick, we have something for everyone.</p>
                                <div className="butn">
                                    <Link to="Packs" delay={false} smooth={false} offset={1}><button className="btn">start now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="hero2">
                            <div className="row home text-center">
                                <Fade top>
                                    <h1>Explore the World of Cinema with Our Curated Collection</h1>
                                </Fade>
                                <p>Cinema enthusiasts can explore our curated collection of foreign films, art-house favorites, and award-winning documentaries. Immerse yourself in the world of cinema and discover new perspectives and cultures.</p>
                                <div className="butn">
                                    <Link to="Packs" delay={false} smooth={false} offset={1}><button className="btn">start now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="hero3">
                            <div className="row home text-center">
                                <Fade top>
                                    <h1>Never Miss a Game with Our Comprehensive Sports Coverage</h1>
                                </Fade>
                                <p>Sports fans can catch all the action on our live sports channels. From soccer and basketball to football and tennis, we cover all the major events and tournaments. Don't miss a single game, match, or race with our comprehensive sports coverage.</p>
                                <div className="butn">
                                    <Link to="Packs" delay={false} smooth={false} offset={1}><button className="btn">start now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}