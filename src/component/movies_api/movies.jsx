import axios from "axios"
import { useEffect, useState, useRef } from "react"
import MoviesCard from "./movieCard"
import "./movies.css"
import TvShow from "./tvshow"


export default function Movies(){
    const [movies, setMovies] = useState([])
    const [tvshow, setTvshow] = useState([])
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=81812b452ad08b6331466a49a3b16317&language=en-US&page=1")
        .then((response)=>{
            setMovies(response.data.results)
        })
        .catch((err)=>{
            console.log('something wron', err)
        })
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=81812b452ad08b6331466a49a3b16317&language=en-US&page=1')
        .then((response)=>{
            setTvshow(response.data.results)
        })
        .catch((err)=>{
            console.log('something wrong', err)
        })
    },[])

    
    // const containerRef = useRef(null);

    // useEffect(() => {
    //   const container = containerRef.current;
    //   if (container) {
    //     container.scrollLeft = container.scrollWidth - container.clientWidth;
    //   }
    // }, []);
    

    const ShowCard = tvshow.map((elm, index)=> <TvShow key={index} {...elm} />)
    const movieCard = movies.map((elm, index) => <MoviesCard key={index} {...elm} />)



    return(
        <>
            <h1 className="text-center my-5">New Movies</h1>
            <div className="container-fluid slider">
                <div className="movie_api">
                    {movieCard}
                    {movieCard}
                </div>
                <div className="show_api">
                    {ShowCard}
                    {ShowCard}
                </div>

            </div>
        </>
    )
}