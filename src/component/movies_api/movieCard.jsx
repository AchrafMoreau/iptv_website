
export default function MoviesCard({poster_path}){
    const GetMoveisURl = `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
    return(
        <div className="container poster_film">
            <img className="posrt_film" src={GetMoveisURl} alt="" />
        </div>
    )
}